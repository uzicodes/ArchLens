import express from 'express';
import cors from 'cors';
import { ASTAnalyzer } from './analyzer/parser';
import * as path from 'path';

const app = express();

// Allow requests from the Next.js frontend
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Main analysis endpoint
app.post('/api/analyze', async (req, res) => {
    try {
        // For this MVP test, we will point the API at its own source code
        // Later, this will be the directory where we clone the GitHub URL
        const targetDirectory = path.join(__dirname, '../src');

        console.log(`Analyzing directory: ${targetDirectory}`);
        const analyzer = new ASTAnalyzer(targetDirectory);
        const result = analyzer.analyze();

        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        console.error('Analysis failed:', error);
        res.status(500).json({ success: false, error: 'Failed to analyze repository' });
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 ArchLens API is running on http://localhost:${PORT}`);
});