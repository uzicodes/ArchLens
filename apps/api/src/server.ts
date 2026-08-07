import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { ASTAnalyzer } from './analyzer/parser';
import { generateArchitectureSummary } from './ai/gemini';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { execSync } from 'child_process';
import { v4 as uuidv4 } from 'uuid';
import { sync as rimrafSync } from 'rimraf';

const app = express();

// Allow requests from the Next.js frontend
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Main analysis endpoint
app.post('/api/analyze', async (req, res) => {
    const { repoUrl } = req.body;

    if (!repoUrl || typeof repoUrl !== 'string') {
        return res.status(400).json({ success: false, error: 'Valid repoUrl string is required' });
    }

    const tempDir = os.tmpdir();
    const tempPath = path.join(tempDir, uuidv4());

    try {
        console.log(`Cloning repository ${repoUrl} into ${tempPath}...`);
        
        // Clone the repository with depth 1 for speed
        execSync(`git clone --depth 1 ${repoUrl} ${tempPath}`, { stdio: 'ignore' });

        console.log(`Analyzing directory: ${tempPath}`);
        const analyzer = new ASTAnalyzer(tempPath);
        const result = analyzer.analyze();

        let aiSummary = "AI integration pending. Repository successfully cloned and mapped!";
        try {
            aiSummary = await generateArchitectureSummary(result.nodes, result.edges);
        } catch (summaryError) {
            console.error("Failed to generate AI summary:", summaryError);
        }

        res.status(200).json({
            success: true,
            data: result,
            summary: aiSummary
        });
    } catch (error) {
        console.error('Analysis failed:', error);
        res.status(500).json({ success: false, error: 'Failed to analyze repository' });
    } finally {
        console.log(`Cleaning up temporary directory: ${tempPath}`);
        try {
            rimrafSync(tempPath);
        } catch (cleanupError) {
            console.error(`Failed to clean up ${tempPath}:`, cleanupError);
        }
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 ArchLens API is running on http://localhost:${PORT}`);
});