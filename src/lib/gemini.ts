import { GoogleGenerativeAI } from "@google/generative-ai";

import { knowledge } from "../ai/knowledge";
import { rules } from "../ai/rules";

const genAI = new GoogleGenerativeAI(
    import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
});

export async function askGemini(
    question: string,
    history: { role: "user" | "ai"; text: string }[]
) {
    try {
        const conversation = history
            .map(
                (message) =>
                    `${message.role === "user" ? "Visitor" : "Assistant"}: ${message.text}`
            )
            .join("\n\n");

        const prompt = `
${rules}

==================================================
KNOWLEDGE BASE
===============================================


${knowledge}

==================================================
PREVIOUS CONVERSATION HISTORY
==================================================

${conversation}

The conversation history above is provided for context.

If the current question refers to something mentioned earlier (for example: "it", "that", "which one", "those", or "tell me more"), use the conversation history to understand what the visitor is referring to.

If the current question starts a new topic, answer it normally using the knowledge base.

==================================================
CURRENT VISITOR QUESTION
==================================================

${question}

Using only the provided knowledge base:

- Answer naturally and professionally.
- Follow all rules exactly.
- Do not invent information.
- Keep the response factual and recruiter-friendly.
- If the visitor asks a question that cannot be answered using the knowledge base, politely state that the information is not currently available in the portfolio instead of making assumptions.
`;

        const result = await model.generateContent(prompt);

        let text = result.response.text();

        // Clean up Markdown formatting if Gemini uses it
        text = text
            .replace(/\*\*/g, "")
            .replace(/__/g, "")
            .replace(/^[-*]\s+/gm, "• ")
            .replace(/^#{1,6}\s+/gm, "")
            .replace(/\n{3,}/g, "\n\n")
            .trim();

        return text;

    } catch (error: any) {
        console.error("Gemini Error:", error);

        if (error?.message?.includes("503")) {
            return "The AI service is currently busy due to high demand. Please try again in a few moments.";
        }

        if (error?.message?.includes("429")) {
            return "Too many requests were sent in a short period. Please wait a moment and try again.";
        }

        return "I'm sorry, but I couldn't process your request at the moment. Please try again later.";
    }
}