import { FinalCommand } from './prompt.js';
import dotenv from 'dotenv';
dotenv.config();

import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });


const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: FinalCommand,
        },
    ],
});

console.log(completion.choices[0].message);