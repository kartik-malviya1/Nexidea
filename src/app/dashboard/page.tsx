"use client"

import { useState } from "react"
import SkillForm from "@/components/skill-form"
import IdeaDisplay from "@/components/ideaDisplay"
import { IdeaDetails } from "@/types/index"
import { Footer } from "@/components/footer"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"

export default function Dashboard() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [ideaDetails, setIdeaDetails] = useState<IdeaDetails | null>(null)

  const handleGenerateIdea = async (skills: string, level: string) => {
    setIsGenerating(true)
    try {
      const response = await fetch("/api/generate-idea", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ skills, level }),
      })

      if (response.ok) {
        const data = await response.json()
        setIdeaDetails(data)
      } else {
        throw new Error("Failed to generate idea.")
      }
    } catch (error) {
      console.error("Error generating idea:", error)
      setIdeaDetails(null)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 mt-10 min-h-screen flex flex-col ">
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
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <Footer />
    </>
  )
}
