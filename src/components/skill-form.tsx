"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Lightbulb, Loader2 } from "lucide-react"

interface SkillFormProps {
  onGenerateIdea: (skills: string, level: string) => Promise<void>
  isGenerating: boolean
}

export default function SkillForm({
  onGenerateIdea,
  isGenerating,
}: SkillFormProps) {
  const [skills, setSkills] = useState("")
  const [level, setLevel] = useState("beginner")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await onGenerateIdea(skills, level)
  }

  return (
    <Card className="shadow-lg border-t-4 border-t-purple-600">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-purple-600" />
          Generate New Idea
        </CardTitle>
        <p className="text-sm text-gray-500">
          Enter your skills and experience level
        </p>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="skills"
              className="text-sm font-medium text-gray-700"
            >
              Skills / Tech Stack
            </label>
            <Input
              id="skills"
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="e.g., React, Node.js, Python"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="level"
              className="text-sm font-medium text-gray-700"
            >
              Experience Level
            </label>
            <Select value={level} onValueChange={setLevel}>
              <SelectTrigger id="level" className="w-full">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Idea"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
