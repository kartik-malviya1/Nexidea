import {IdeaDetails} from "@/types/index"

export const parseIdeaDetails = (text: string): IdeaDetails => {
  const title = text.match(/## Project Idea:\s*(.+)/)?.[1] || "Untitled"
  const description = text.match(/\*\*Description:\*\*\s*(.+?)(?=\*\*Tech Stack:)/)?.[1]?.trim() || ""
  const techStack = text
    .match(/\*\*Tech Stack:\*\*(.+?)(?=\*\*Example Routes and API Endpoints:)/)?.[1]
    ?.split("\n")
    .map((item) => item.trim().replace(/[*-]\s*/, ""))
    .filter((item) => item) || []

  const routes = text
    .match(/\*\*Frontend Routes \(React Router\):\*\*(.+?)(?=\*\*Backend Endpoints)/)?.[1]
    ?.split("\n")
    .map((item) => item.trim().replace(/[*-]\s*/, ""))
    .filter((item) => item) || []

  const apiRoutes = text
    .match(/\*\*Backend Endpoints \(Node.js\/Express.js\):\*\*(.+?)(?=\*\*Example Data Structure)/)?.[1]
    ?.split("\n")
    .map((item) => item.trim().replace(/[*-]\s*/, ""))
    .filter((item) => item) || []

  const additionalFeatures = text
    .match(/\*\*Additional Features for Enhancement:\*\*(.+)/)?.[1]
    ?.split(/\n+/)
    .map((item) => item.trim().replace(/[*-]\s*/, ""))
    .filter((item) => item) || []

  return {
    title,
    description,
    techStack,
    routes,
    apiRoutes,
    additionalFeatures,
  }
}
