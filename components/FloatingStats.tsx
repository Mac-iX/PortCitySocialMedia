"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: "88%", label: "of digital marketers use AI daily", source: "HubSpot, 2024" },
  { value: "70%", label: "of marketers lack employer AI training", source: "Marketing Week" },
  { value: "42%", label: "use AI for social media copy", source: "Sprout Social" },
  { value: "39%", label: "use AI for social media images", source: "Sprout Social" },
  { value: "38%", label: "cite efficiency as top AI benefit", source: "HubSpot" },
  { value: "34%", label: "say AI makes idea generation easier", source: "Content Marketing Institute" },
]

interface VisibleStat {
  index: number
  id: number
  side: "left" | "right"
}

export default function FloatingStats() {
  const [visibleStats, setVisibleStats] = useState<VisibleStat[]>([])
  const indexRef = useRef(0)
  const idRef = useRef(0)
  const sideRef = useRef<"left" | "right">("left")

  useEffect(() => {
    const showStat = () => {
      const newStat: VisibleStat = {
        index: indexRef.current,
        id: idRef.current,
        side: sideRef.current,
      }
      
      setVisibleStats((prev) => [...prev.slice(-1), newStat])
      
      indexRef.current = (indexRef.current + 1) % stats.length
      idRef.current += 1
      sideRef.current = sideRef.current === "left" ? "right" : "left"
    }

    const timeout = setTimeout(showStat, 1000)
    const interval = setInterval(showStat, 6000)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden hidden md:block">
      {visibleStats.map((stat, i) => {
        const data = stats[stat.index]
        const topPosition = stat.side === "left" ? 35 : 55
        
        return (
          <div
            key={stat.id}
            className={`absolute ${stat.side === "left" ? "left-4" : "right-4"}`}
            style={{ 
              top: `${topPosition}%`,
              animation: "fade-slide 8s ease-in-out forwards",
            }}
          >
            <div className="bg-black/90 backdrop-blur-sm border border-[var(--pc-accent)]/30 rounded-lg px-4 py-3 max-w-[180px] shadow-xl shadow-[var(--pc-accent)]/10">
              <p className="text-xl font-bold text-[var(--pc-gold)]">{data.value}</p>
              <p className="text-xs text-[var(--pc-front)] leading-tight">{data.label}</p>
              <p className="text-[10px] text-[var(--pc-muted)] mt-1">{data.source}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
