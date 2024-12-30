'use client'
import React from 'react'
import { Star, Trophy, Sparkles } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

export default function SkillSelector() {
  const [selectedSkill, setSelectedSkill] = React.useState('beginner')

  const skills = [
    {
      id: 'beginner',
      label: 'Beginner',
      icon: Star,
    },
    {
      id: 'intermediate',
      label: 'Intermediate',
      icon: Trophy,
    },
    {
      id: 'advanced',
      label: 'Advanced',
      icon: Sparkles,
    },
  ]

  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex gap-4">
        {skills.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setSelectedSkill(id)}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-lg transition-colors",
              "hover:bg-purple-600 border" ,
              selectedSkill === id
                ? "bg-purple-600 text-white"
                : "text-purple-600 hover:text-white"
            )}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        ))}
      </div>
      
      <div className="flex gap-4">
        <Input
          placeholder="Type your skill details here"
          className="flex-1 h-14 rounded-xl bg-white text-purple-900 placeholder:text-gray-400"
        />
      </div>
    </div>
  )
}

