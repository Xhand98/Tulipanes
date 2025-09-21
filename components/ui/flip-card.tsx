"use client"

import { ReactNode, useState } from "react"
import { cn } from "@/lib/utils"

interface FlipCardProps {
  frontContent: ReactNode
  backContent: ReactNode
  className?: string
}

export function FlipCard({ frontContent, backContent, className }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={cn("flip-card-container", className)} onClick={handleClick}>
      <div className={cn("flip-card", isFlipped && "flipped")}>
        <div className="flip-card-inner">
          <div className="flip-card-front bg-background">
            {frontContent}
          </div>
          <div className="flip-card-back bg-background">
            {backContent}
          </div>
        </div>
      </div>
    </div>
  )
}