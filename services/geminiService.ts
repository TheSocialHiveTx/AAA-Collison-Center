
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getGeminiResponse = async (prompt: string, imageBase64?: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const model = 'gemini-3-flash-preview';

  try {
    let contents: any;

    if (imageBase64) {
      const imagePart = {
        inlineData: {
          mimeType: 'image/jpeg',
          data: imageBase64.split(',')[1] || imageBase64,
        },
      };
      const textPart = { text: prompt };
      contents = { parts: [imagePart, textPart] };
    } else {
      contents = prompt;
    }

    const response: GenerateContentResponse = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction: `You are the AI Assistant for AAA Collision Center in Houston, TX. 
        Your goal is to help users understand potential car issues, explain our services, and offer preliminary collision assessment based on descriptions or photos. 
        Always be professional, reassuring, and helpful. 
        Remind users that for official estimates, they should call (832) 430-1992 or visit 2951 Washington Dr, Ste B, Houston. 
        Services include: Expert collision repair, auto repair, engine overhaul, 24/7 towing, and roadside recovery. 
        We work on all makes: cars, trucks, SUVs, classics, and exotics.`,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please contact our shop directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm experiencing some technical difficulties. Please call us at (832) 430-1992 for immediate assistance.";
  }
};
