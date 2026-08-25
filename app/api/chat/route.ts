import { google } from "@ai-sdk/google";
import {
  convertToModelMessages,
  stepCountIs,
  streamText,
  tool,
  type UIMessage,
} from "ai";
import { z } from "zod";
import { aiProfile, getAIProfile } from "@/lib/ai-profile";
import {
  getProjects,
  getProjectsByTechnology,
  getSkills,
} from "@/lib/portfolio";

export const runtime = "nodejs";

const systemPrompt = `${aiProfile.assistantBehavior.role}
${aiProfile.assistantBehavior.rules.map((rule) => `- ${rule}`).join("\n")}
You are the portfolio assistant for ${aiProfile.identity.name}, a ${aiProfile.identity.role}.
Answer only from the information returned by the portfolio tools and this identity. Use tools whenever a question concerns projects, technologies, skills, or experience.
Never invent employers, dates, education, achievements, proficiency rankings, project details, or personal information. If the portfolio does not contain an answer, say that clearly.
Keep answers concise and helpful. When asked for the strongest or best project, explain that the portfolio does not provide a ranking; you may describe the most relevant listed project without claiming it is objectively strongest.`;

function getSafeGeminiError(error: unknown) {
  const message = error instanceof Error ? error.message.toLowerCase() : "";
  if (message.includes("credit") || message.includes("quota") || message.includes("billing")) {
    return "The assistant is temporarily unavailable because the Gemini API quota has been reached.";
  }
  if (message.includes("api key") || message.includes("authentication") || message.includes("unauthorized")) {
    return "The assistant could not authenticate with Gemini. Please check GOOGLE_GENERATIVE_AI_API_KEY on the server.";
  }
  if (message.includes("rate limit")) {
    return "The assistant is receiving too many requests. Please wait a moment and try again.";
  }
  if (message.includes("model") && (message.includes("not available") || message.includes("not found"))) {
    return "The configured Gemini model is unavailable. Please update the server model configuration.";
  }
  return "The assistant could not complete that request. Please try again later.";
}

export async function POST(request: Request) {
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return Response.json(
      { error: "The portfolio assistant is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const body = (await request.json()) as { messages?: UIMessage[] };
    if (!Array.isArray(body.messages) || body.messages.length === 0) {
      return Response.json({ error: "A message is required." }, { status: 400 });
    }

    const result = streamText({
      model: google("gemini-3.6-flash"),
      system: systemPrompt,
      messages: await convertToModelMessages(body.messages),
      stopWhen: stepCountIs(5),
      tools: {
        getProjects: tool({
          description: "Get every project listed in the portfolio.",
          inputSchema: z.object({}),
          execute: async () => getProjects(),
        }),
        getProjectsByTechnology: tool({
          description: "Find portfolio projects that use a named technology.",
          inputSchema: z.object({ technology: z.string().min(1).describe("Technology to search for") }),
          execute: async ({ technology }) => getProjectsByTechnology(technology),
        }),
        getSkills: tool({
          description: "Get technologies and skills listed in the portfolio.",
          inputSchema: z.object({}),
          execute: async () => getSkills(),
        }),
        getExperience: tool({
          description: "Get the experience information available in the portfolio.",
          inputSchema: z.object({}),
          execute: async () => aiProfile.experience,
        }),
        getProfile: tool({
          description: "Get authoritative professional information about Arsen, including identity, location, summary, expertise, experience, education, strengths, interests, and career goals.",
          inputSchema: z.object({}),
          execute: async () => getAIProfile(),
        }),
      },
    });

    return result.toUIMessageStreamResponse({
      onError: (error) => {
        console.error("Portfolio assistant Gemini stream failed", error);
        return getSafeGeminiError(error);
      },
    });
  } catch (error) {
    console.error("Portfolio assistant request failed", error);
    return Response.json({ error: "The assistant could not process that request." }, { status: 500 });
  }
}
