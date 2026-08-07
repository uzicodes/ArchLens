import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';

export interface GraphNode {
    id: string;
    data: {
        label: string;
        type: string;
    };
}

export interface GraphEdge {
    id: string;
    source: string;
    target: string;
}

export class ASTAnalyzer {
    private nodes: Map<string, GraphNode> = new Map();
    private edges: GraphEdge[] = [];
    private rootDir: string;

    constructor(rootDir: string) {
        this.rootDir = rootDir;
    }

    // Recursively find all TypeScript/JavaScript files in the repository
    private walkDir(dir: string, fileList: string[] = []): string[] {
        const files = fs.readdirSync(dir);

        for (const file of files) {
            const filePath = path.join(dir, file);

            if (fs.statSync(filePath).isDirectory()) {
                // Ignore build folders and node_modules
                if (!file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
                    this.walkDir(filePath, fileList);
                }
            } else if (filePath.match(/\.(ts|tsx|js|jsx)$/)) {
                fileList.push(filePath);
            }
        }

        return fileList;
    }

    // Main execution method
    public analyze() {
        const files = this.walkDir(this.rootDir);

        for (const file of files) {
            this.processFile(file);
        }

        const connectedNodeIds = new Set<string>();
        for (const edge of this.edges) {
            connectedNodeIds.add(edge.source);
            connectedNodeIds.add(edge.target);
        }

        const filteredNodes = Array.from(this.nodes.values()).filter(node => 
            connectedNodeIds.has(node.id)
        );

        return {
            nodes: filteredNodes,
            edges: this.edges,
        };
    }

    private stripExtension(filePath: string): string {
        return filePath.replace(/\.(tsx|ts|jsx|js|css)$/, '');
    }

    // The Core AST Extraction Logic
    private processFile(filePath: string) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const relativePath = path.relative(this.rootDir, filePath).replace(/\\/g, '/');
        const normalizedNodeId = this.stripExtension(relativePath);

        if (!this.nodes.has(normalizedNodeId)) {
            const parts = relativePath.split('/');
            const label = parts.length > 1 
                ? `${parts[parts.length - 2]}/${parts[parts.length - 1]}` 
                : path.basename(relativePath);

            this.nodes.set(normalizedNodeId, {
                id: normalizedNodeId,
                data: {
                    label: label,
                    type: this.determineNodeType(relativePath)
                }
            });
        }

        const sourceFile = ts.createSourceFile(
            filePath,
            fileContent,
            ts.ScriptTarget.Latest,
            true
        );

        ts.forEachChild(sourceFile, (node) => {
            if (ts.isImportDeclaration(node)) {
                const importPath = (node.moduleSpecifier as ts.StringLiteral).text;

                if (importPath.startsWith('.') || importPath.startsWith('@/')) {
                    let relativeImportPath = '';
                    
                    if (importPath.startsWith('.')) {
                        const absoluteImportPath = path.resolve(path.dirname(filePath), importPath);
                        relativeImportPath = path.relative(this.rootDir, absoluteImportPath).replace(/\\/g, '/');
                    } else if (importPath.startsWith('@/')) {
                        const srcPath = path.join(this.rootDir, 'src');
                        if (fs.existsSync(srcPath)) {
                            relativeImportPath = importPath.replace('@/', 'src/');
                        } else {
                            relativeImportPath = importPath.replace('@/', '');
                        }
                    }

                    const normalizedTargetId = this.stripExtension(relativeImportPath);
                    const edgeId = `e_${normalizedNodeId}-${normalizedTargetId}`;

                    if (!this.edges.some(e => e.id === edgeId)) {
                        this.edges.push({
                            id: edgeId,
                            source: normalizedNodeId,
                            target: normalizedTargetId
                        });
                    }
                }
            }
        });
    }

    // Auto-assign icons based on file naming conventions
    private determineNodeType(filePath: string): string {
        const lowerPath = filePath.toLowerCase();
        if (lowerPath.includes('component') || lowerPath.endsWith('.tsx')) return 'frontend';
        if (lowerPath.includes('api') || lowerPath.includes('route') || lowerPath.includes('controller')) return 'backend';
        if (lowerPath.includes('db') || lowerPath.includes('prisma') || lowerPath.includes('model')) return 'database';
        if (lowerPath.includes('auth')) return 'auth';
        return 'default';
    }
}