import { FinalCommand } from './prompt.js';  
import dotenv from 'dotenv';
import OpenAI from "openai";
import { saveToFile } from './saveToFile.js'; 

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const getFinalCommand = async () => {
  try {
    const finalCommand = await FinalCommand();
    
    if (!finalCommand) {
      throw new Error("finalCommand is empty or undefined.");
    }

 
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: finalCommand,
        },
      ],
    });

    const result = completion.choices[0].message.content;

   
    saveToFile(result);

  } catch (error) {
    console.error("Błąd w czasie wykonywania:", error);
  }
};


getFinalCommand();
