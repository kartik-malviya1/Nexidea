import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function GET() {
  // Prompt for generating a project idea using AI
  const prompt = `
    Generate an idea for a software project based on the following theme:
    Theme: Weather Prediction App with Machine Learning
    
    Include the following details:
    - Project title
    - Description
    - Tech stack (up to 5 technologies)
    - Example routes and API endpoints
    - Additional features for enhancement.
    Make it concise and engaging for a developer audience.
  `;

  try {
    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();
    return NextResponse.json({ ideaDetails: responseText });
  } catch (error) {
    console.error("Error generating project idea:", error);
    return NextResponse.json(
      { error: "Failed to generate project idea. Please try again." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const { skills, level } = await req.json();

  // Prompt for generating tailored project details using AI
  const prompt = `
    Generate a project idea tailored to the following developer inputs:
    - Developer skills: ${skills}
    - Proficiency level: ${level}

    Include the following details:
    - Project title
    - Description
    - Tech stack (based on the skills provided)
    - Example routes and API endpoints
    - Additional features for enhancement.
    Make it concise and engaging for a developer audience.
  `;

  try {
    const result = await model.generateContent(prompt);
    const responseText = await result.response.text();
    
    return NextResponse.json({ ideaDetails: responseText });
  } catch (error) {
    console.error("Error generating project details:", error);
    return NextResponse.json(
      { error: "Failed to generate project details. Please try again." },
      { status: 500 }
    );
  }
}
