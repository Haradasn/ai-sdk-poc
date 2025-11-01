import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

const { text } = await generateText({
  model: openai("o3"),
  system: "You are a friendly assistant!",
  prompt: "なぜ空は青い？",
});

console.log(text);
