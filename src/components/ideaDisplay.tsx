"use client"

import { useEffect, useState } from "react"
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
import { Loader2, RefreshCw } from "lucide-react"

interface IdeaDetails {
  title: string
  description: string
  techStack: string[]
  routes: string[]
  apiRoutes: string[]
  additionalFeatures: string[]
}

export default function IdeaDisplay() {
  const [ideaDetails, setIdeaDetails] = useState<IdeaDetails | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchIdea = async () => {
    setIsLoading(true)
    const response = await fetch("/api/generate-idea")
    if (response.ok) {
      const data = await response.json()
      setIdeaDetails(data)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchIdea()
  }, [])

  if (isLoading) {
    return (
      <Card className="w-full h-full flex items-center justify-center min-h-[600px]">
        <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
      </Card>
    )
  }

  if (!ideaDetails) {
    return (
      <Card className="w-full h-full flex items-center justify-center min-h-[600px]">
        <p className="text-lg text-gray-500">
          Failed to load idea. Please try again.
        </p>
      </Card>
    )
  }

  return (
    <Card className="w-full shadow-lg border-t-4 border-t-purple-600">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">
          {ideaDetails.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-purple-700">
            Description
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {ideaDetails.description}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-purple-700">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {ideaDetails.techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-purple-100 text-purple-800"
              >
                {tech}
              </Badge>
            ))}
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
                {ideaDetails.routes.map((route, index) => (
                  <li key={index}>{route}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-1 text-gray-700">API Routes</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {ideaDetails.apiRoutes.map((route, index) => (
                  <li key={index}>{route}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2 text-purple-700">
            Additional Features
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {ideaDetails.additionalFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={fetchIdea}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-4 h-4" />
          Generate New Idea
        </Button>
      </CardFooter>
    </Card>
  )
}
