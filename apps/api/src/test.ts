import { ASTAnalyzer } from './analyzer/parser';
import * as path from 'path';

// Point the analyzer at the src directory of the api workspace
const targetDirectory = path.join(__dirname, '../src');
const analyzer = new ASTAnalyzer(targetDirectory);

const result = analyzer.analyze();

console.log('--- ARCHLENS PARSER RESULTS ---');
console.log(`Found ${result.nodes.length} nodes.`);
console.log(`Found ${result.edges.length} edges.`);
console.log('\nNode Structure:');
console.log(JSON.stringify(result.nodes, null, 2));