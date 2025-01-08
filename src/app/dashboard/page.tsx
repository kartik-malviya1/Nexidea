"use client"

import { useState } from "react"
import SkillForm from "@/components/skill-form"
import IdeaDisplay from "./(components)/ideaDisplay"
import { IdeaDetails } from "@/types/index"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { toast } from "sonner"

export default function Dashboard() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [ideaDetails, setIdeaDetails] = useState<IdeaDetails | null>(null)
  const [currentSkills, setCurrentSkills] = useState("")
  const [currentLevel, setCurrentLevel] = useState("")

  const handleGenerateIdea = async (skills: string, level: string) => {
    setCurrentSkills(skills)
    setCurrentLevel(level)
    setIsGenerating(true)
    try {
      const response = await fetch("/api/generate-idea", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skills, level }),
      })

      const data = await response.json()
      // console.log("API Response Status:", response.status)
      // console.log("API Response Data:", data)

      if (response.ok) {
        setIdeaDetails(data)
        toast.success("Successfully generated new idea!")
      } else {
        toast.error(data.error || "Failed to generate idea")
      }
    } catch (error) {
      console.error("Error generating idea:", error)
      setIdeaDetails(null)
      toast.error("Failed to generate idea. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 mt-10 min-h-screen flex flex-col">
        <MaxWidthWrapper>
          <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <SkillForm
                onGenerateIdea={handleGenerateIdea}
                isGenerating={isGenerating}
              />
            </div>
            <div className="lg:col-span-2">
              <IdeaDisplay
                ideaDetails={ideaDetails}
                isGenerating={isGenerating}
                setIsGenerating={setIsGenerating}
                onRegenerate={() =>
                  handleGenerateIdea(currentSkills, currentLevel)
                }
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  )
}
