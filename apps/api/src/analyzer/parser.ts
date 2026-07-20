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

        return {
            nodes: Array.from(this.nodes.values()),
            edges: this.edges,
        };
    }

    // The Core AST Extraction Logic
    private processFile(filePath: string) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const relativePath = path.relative(this.rootDir, filePath).replace(/\\/g, '/');

        if (!this.nodes.has(relativePath)) {
            this.nodes.set(relativePath, {
                id: relativePath,
                data: {
                    label: path.basename(relativePath),
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

                if (importPath.startsWith('.')) {
                    const absoluteImportPath = path.resolve(path.dirname(filePath), importPath);
                    let relativeImportPath = path.relative(this.rootDir, absoluteImportPath).replace(/\\/g, '/');

                    if (!path.extname(relativeImportPath)) {
                        relativeImportPath += '.ts';
                    }

                    const edgeId = `e_${relativePath}-${relativeImportPath}`;

                    this.edges.push({
                        id: edgeId,
                        source: relativePath,
                        target: relativeImportPath
                    });
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