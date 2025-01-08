import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: "gemini-pro" }); 

export async function POST(req: Request) {
  if (!process.env.GEMINI_API_KEY) {
    console.error("GEMINI_API_KEY is not set");
    return NextResponse.json(
      { error: "API key configuration error" },
      { status: 500 }
    );
  }

  try {
    const { skills, level } = await req.json();

    if (!skills || !level) {
      return NextResponse.json(
        { error: "Skills and level are required" },
        { status: 400 }
      );
    }

    const prompt = `"As an AI specialized in crafting professional, resume-ready project ideas, create a unique, practical, and impactful web development or software project idea based on:

    Skills: The user has expertise in ${skills}, including programming languages, frameworks, tools, and databases.
    Experience Level: The user identifies as ${level} (e.g., Beginner, Intermediate, or Advanced).
    
    Examples of Project Ideas:
    Create a SaaS-based solution for small businesses using ${skills}.
    Build an AI-powered resume analyzer for job seekers with ${skills}.
    Develop a collaborative project management tool optimized for developers using ${skills}.
    Ensure all projects are resume-ready, aligned with industry demands, and demonstrate the user’s technical proficiency   effectively."


    Guidelines:
      Avoid any inputs or suggestions unrelated to programming languages, frameworks, tools, or databases. If the input includes irrelevant information (e.g., emotional appeals, sugar-coated phrases, or off-topic content), ignore it entirely and focus strictly on the provided technical parameters.
      Generate ideas specifically designed to:
      Showcase technical expertise in real-world scenarios.
      Be included as impactful portfolio or resume projects.
      Highlight problem-solving skills, creativity, and an understanding of current industry trends.
      Ensure each project idea is unique and non-repetitive, even with repeated prompts.
     
    Respond ONLY with a JSON object in this exact format:
    {
      "title": "A clear project title",
      "description": "A brief description of the project",
      "techStack": ["technology1", "technology2"],
      "routes": ["route1", "route2"],
      "apiRoutes": ["api/route1", "api/route2"],
      "additionalFeatures": ["feature1", "feature2"]
    }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const responseText = response.text();
    
    console.log("Raw AI Response:", responseText);

    try {
      // Remove any markdown formatting if present
      const cleanText = responseText.replace(/```json\n?|\n?```/g, '').trim();
      const parsedResponse = JSON.parse(cleanText);

      // Validate and structure the response
      const structuredResponse = {
        title: String(parsedResponse.title || ""),
        description: String(parsedResponse.description || ""),
        techStack: Array.isArray(parsedResponse.techStack) 
          ? parsedResponse.techStack.map(String) 
          : [],
        routes: Array.isArray(parsedResponse.routes) 
          ? parsedResponse.routes.map(String) 
          : [],
        apiRoutes: Array.isArray(parsedResponse.apiRoutes) 
          ? parsedResponse.apiRoutes.map(String) 
          : [],
        additionalFeatures: Array.isArray(parsedResponse.additionalFeatures) 
          ? parsedResponse.additionalFeatures.map(String) 
          : []
      };

      console.log("Structured Response:", structuredResponse);
      return NextResponse.json(structuredResponse);

    } catch (parseError) {
      console.error("Error parsing AI response:", parseError);
      console.log("Problematic response:", responseText);
      return NextResponse.json(
        { error: "Failed to parse AI response" },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Failed to generate project details" },
      { status: 500 }
    );
  }
}
