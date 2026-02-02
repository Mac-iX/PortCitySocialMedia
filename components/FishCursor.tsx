"use client"

import { useEffect, useState } from "react"

export default function FishCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [isClicking, setIsClicking] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        window.getComputedStyle(target).cursor === "pointer"
      setIsHovering(!!isClickable)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  const fishColor = isHovering ? "#ffd700" : "#00e0b8"
  const fishColorDark = isHovering ? "#cc9900" : "#008577"
  const scale = isClicking ? 0.85 : 1

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        left: position.x,
        top: position.y,
        transform: `translate(-50%, -50%) scale(${scale}) rotate(-25deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        className="overflow-visible"
      >
        {/* Fish body */}
        <ellipse
          cx="24"
          cy="24"
          rx="16"
          ry="10"
          fill={fishColor}
          opacity="0.95"
        />
        
        {/* Animated tail */}
        <g className="origin-[12px_24px]" style={{ animation: "fish-swim 0.4s ease-in-out infinite" }}>
          <path
            d="M8 24 L0 16 L0 32 Z"
            fill={fishColor}
          />
        </g>
        
        {/* Dorsal fin */}
        <path
          d="M20 14 Q24 8 28 14"
          fill={fishColorDark}
          opacity="0.7"
        />
        
        {/* Scales pattern */}
        <path
          d="M16 24 Q24 19 32 24 Q24 29 16 24"
          fill={fishColorDark}
          opacity="0.4"
        />
        
        {/* Eye */}
        <circle cx="34" cy="22" r="3.5" fill="#000" />
        <circle cx="35" cy="21" r="1.5" fill="#fff" opacity="0.8" />
        
        {/* Bubble trail */}
        <circle cx="-4" cy="20" r="2" fill={fishColor} opacity="0.3" className="animate-pulse" />
        <circle cx="-8" cy="26" r="1.5" fill={fishColor} opacity="0.2" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
      </svg>
    </div>
  )
}
