"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Loader2, RefreshCw, Lightbulb } from "lucide-react"

interface IdeaDetails {
  title: string
  description: string
  techStack: string[]
  routes: string[]
  apiRoutes: string[]
  additionalFeatures: string[]
}

interface IdeaDisplayProps {
  ideaDetails: IdeaDetails | null
  isGenerating: boolean
  setIsGenerating: (isGenerating: boolean) => void
}

export default function IdeaDisplay({
  ideaDetails,
  isGenerating,
  setIsGenerating,
}: IdeaDisplayProps) {
  if (isGenerating) {
    return (
      <Card className="w-full h-full flex items-center justify-center min-h-[600px]">
        <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
      </Card>
    )
  }

  if (!ideaDetails) {
    return (
      <Card className="w-full h-full flex flex-col items-center justify-center min-h-[600px] space-y-6 p-8">
        <Lightbulb className="w-16 h-16 text-purple-600" />
        <CardTitle className="text-2xl font-bold text-center text-gray-800">
          Welcome to the Idea Generator!
        </CardTitle>
        <p className="text-center text-gray-600 max-w-md">
          No ideas generated yet. Fill in your skills and experience level, then
          click &quot;Generate Idea&quot; to get started.
        </p>
      </Card>
    )
  }

  return (
    <Card className="w-full shadow-lg border-t-4 border-t-purple-600">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">
          {ideaDetails.title || "Untitled Idea"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-purple-700">
            Description
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {ideaDetails.description || "No description available."}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-purple-700">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {ideaDetails.techStack && ideaDetails.techStack.length > 0 ? (
              ideaDetails.techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-purple-100 text-purple-800"
                >
                  {tech}
                </Badge>
              ))
            ) : (
              <p className="text-gray-500">No tech stack specified.</p>
            )}
          </div>
        </div>

        <Separator className="bg-purple-200" />

        <div>
          <h3 className="text-lg font-semibold mb-2 text-purple-700">
            Roadmap
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1 text-gray-700">Routes</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {ideaDetails.routes && ideaDetails.routes.length > 0 ? (
                  ideaDetails.routes.map((route, index) => (
                    <li key={index}>{route}</li>
                  ))
                ) : (
                  <li>No routes specified.</li>
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-1 text-gray-700">API Routes</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {ideaDetails.apiRoutes && ideaDetails.apiRoutes.length > 0 ? (
                  ideaDetails.apiRoutes.map((route, index) => (
                    <li key={index}>{route}</li>
                  ))
                ) : (
                  <li>No API routes specified.</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-purple-700">
            Additional Features
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {ideaDetails.additionalFeatures &&
            ideaDetails.additionalFeatures.length > 0 ? (
              ideaDetails.additionalFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))
            ) : (
              <li>No additional features specified.</li>
            )}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => setIsGenerating(true)}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Generate New Idea
        </Button>
      </CardFooter>
    </Card>
  )
}
