"use client"
import { useState } from "react"
import { Button } from "./ui/button"

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true) // Controls whether the banner is rendered

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <>
      {isVisible && (
        <div
          className={`flex items-center p-0.5 bg-purple-200 justify-center transition-all duration-300 ease-in-out`}
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
