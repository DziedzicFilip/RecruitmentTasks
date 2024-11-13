import { FinalCommand } from './prompt.js'; 
import dotenv from 'dotenv';
dotenv.config();

import OpenAI from "openai";

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

    console.log(completion.choices[0].message);
  } catch (error) {
    console.error("Błąd w czasie wykonywania:", error);
  }
};


getFinalCommand();
