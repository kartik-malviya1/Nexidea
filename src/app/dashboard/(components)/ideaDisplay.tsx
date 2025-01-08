"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { IdeaDetails } from "@/types/index"
import { Lightbulb, Loader2, RefreshCw } from "lucide-react"

interface IdeaDisplayProps {
  ideaDetails: IdeaDetails | null
  isGenerating: boolean
  setIsGenerating: (isGenerating: boolean) => void
  onRegenerate: () => Promise<void>
}

export default function IdeaDisplay({
  ideaDetails,
  isGenerating,
  onRegenerate,
}: IdeaDisplayProps) {
  console.log("Received ideaDetails:", ideaDetails);

  if (isGenerating) {
    return (
      <Card className="w-full h-full flex items-center justify-center min-h-[600px]">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
          <p className="text-gray-600">Generating your project idea...</p>
        </div>
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

  const techStack = ideaDetails.techStack || [];
  const routes = ideaDetails.routes || [];
  const apiRoutes = ideaDetails.apiRoutes || [];
  const additionalFeatures = ideaDetails.additionalFeatures || [];

  const handleRegenerate = async () => {
    try {
      await onRegenerate()
    } catch (error) {
      console.error("Error regenerating idea:", error)
    }
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
            {techStack.length > 0 ? (
              techStack.map((tech, index) => (
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
                {routes.length > 0 ? (
                  routes.map((route, index) => (
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
                {apiRoutes.length > 0 ? (
                  apiRoutes.map((route, index) => (
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
            {additionalFeatures.length > 0 ? (
              additionalFeatures.map((feature, index) => (
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
          onClick={handleRegenerate}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center gap-2"
          disabled={isGenerating}
        >
          <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
          {isGenerating ? 'Generating New Idea...' : 'Generate New Idea'}
        </Button>
      </CardFooter>
    </Card>
  )
}
