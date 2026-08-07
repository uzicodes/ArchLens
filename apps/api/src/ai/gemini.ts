import { GoogleGenAI } from '@google/genai';

export async function generateArchitectureSummary(nodes: any[], edges: any[]): Promise<string> {
    if (!process.env.GEMINI_API_KEY) {
        return "AI insights disabled: Missing API Key.";
    }

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        
        const compactNodes = nodes.map(n => n.id || n.name || JSON.stringify(n)).join('; ');
        const compactEdges = edges.map(e => `${e.source}->${e.target}`).join('; ');
        
        const payload = `Files/Components:\n${compactNodes}\n\nDependencies:\n${compactEdges}`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: payload,
            config: {
                systemInstruction: "You are a Senior Software Architect. Analyze the provided file structure and dependencies. Return a concise, 2-3 sentence technical summary of the architecture. Do not use filler introductions.",
            }
        });

        return response.text || "AI insights disabled: Empty response from AI.";
    } catch (error) {
        console.error("Error generating architecture summary:", error);
        return "AI insights disabled: Request failed.";
    }
}
