"use client"
import { useState } from "react"
import { Button } from "./ui/button"

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true) // Controls whether the banner is rendered
  const [isClosing, setIsClosing] = useState(false) // Controls the closing animation

  const handleClose = () => {
    setIsClosing(true) // Trigger the closing animation
    setTimeout(() => setIsVisible(false), 300) // Remove the banner after the animation completes (300ms matches CSS)
  }

  return (
    <>
      {isVisible && (
        <div
          className={`flex items-center p-0.5 bg-purple-200 justify-center transition-all duration-300 ease-in-out ${
            isClosing
              ? "opacity-0 translate-y-[-20px]"
              : "opacity-100 translate-y-0"
          }`}
        >
          <div className="w-full items-center">
            <div className="text-center font-medium text-sm text-purple-950">
              ⚙️ Under Construction: Some features are still under development!
            </div>
          </div>
          <div>
            <Button
              variant={"ghost"}
              size={"sm"}
              className="hover:bg-purple-300/20"
              onClick={handleClose}
            >
              X
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default Banner
