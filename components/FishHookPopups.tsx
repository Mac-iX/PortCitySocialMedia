"use client"

import { useEffect, useState, useRef } from "react"

const hookStats = [
  {
    value: "88%",
    label: "of digital marketers now use AI daily",
    source: "HubSpot, 2024",
    wittyLine: "Looks like you took the bait!",
  },
  {
    value: "70%",
    label: "of marketers say employers don't provide AI training",
    source: "Marketing Week",
    wittyLine: "Hook, line, and sinker!",
  },
  {
    value: "42%",
    label: "of marketers use AI for social media copy",
    source: "Sprout Social",
    wittyLine: "Caught you looking!",
  },
  {
    value: "39%",
    label: "use AI software for social media images",
    source: "Sprout Social",
    wittyLine: "Reeled you right in!",
  },
  {
    value: "38%",
    label: "cite increased efficiency as top AI benefit",
    source: "HubSpot",
    wittyLine: "You're hooked now!",
  },
  {
    value: "34%",
    label: "report easier idea generation with AI",
    source: "Content Marketing Institute",
    wittyLine: "Nice catch!",
  },
]

interface HookPopup {
  id: number
  stat: (typeof hookStats)[0]
  side: "left" | "right"
  yPosition: number
  caught: boolean
}

export default function FishHookPopups() {
  const [popups, setPopups] = useState<HookPopup[]>([])
  const [expandedPopup, setExpandedPopup] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const popupIdRef = useRef(0)
  const statIndexRef = useRef(0)
  const lastSideRef = useRef<"left" | "right">("right")
  const yPositionRef = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const spawnPopup = () => {
      // Alternate sides - never same side twice in a row
      const side: "left" | "right" = lastSideRef.current === "left" ? "right" : "left"
      lastSideRef.current = side

      // Layer popups down the page - keep right side popups higher to avoid cutoff
      // Left side can go lower, right side stays in upper portion
      const leftYPositions = [15, 35, 50, 65]
      const rightYPositions = [10, 25, 40, 55]
      const yPositions = side === "left" ? leftYPositions : rightYPositions
      const yPosition = yPositions[yPositionRef.current % yPositions.length]
      yPositionRef.current += 1

      const newPopup: HookPopup = {
        id: popupIdRef.current,
        stat: hookStats[statIndexRef.current],
        side,
        yPosition,
        caught: false,
      }

      setPopups((prev) => {
        // Remove oldest popup if we have more than 3
        const filtered = prev.slice(-2)
        return [...filtered, newPopup]
      })
      popupIdRef.current += 1
      statIndexRef.current = (statIndexRef.current + 1) % hookStats.length
    }

    const timeout = setTimeout(spawnPopup, 2000)
    const interval = setInterval(spawnPopup, 12000)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [])

  // Check if fish cursor is near a hook
  useEffect(() => {
    setPopups((prev) =>
      prev.map((popup) => {
        if (popup.caught) return popup
        const hookX = popup.side === "left" ? 120 : window.innerWidth - 120
        const hookY = (popup.yPosition / 100) * window.innerHeight + 60
        const distance = Math.sqrt(Math.pow(mousePos.x - hookX, 2) + Math.pow(mousePos.y - hookY, 2))
        if (distance < 80) {
          return { ...popup, caught: true }
        }
        return popup
      })
    )
  }, [mousePos])

  const handleCTAClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
    setExpandedPopup(null)
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block">
      {popups.map((popup) => (
        <div
          key={popup.id}
          className={`absolute transition-all duration-500 ${popup.caught ? "pointer-events-auto" : ""}`}
          style={{
            left: popup.side === "left" ? 16 : "auto",
            right: popup.side === "right" ? 16 : "auto",
            top: `${popup.yPosition}%`,
            animation: popup.caught ? "none" : "bob 3s ease-in-out infinite",
          }}
        >
          {/* Fishing line from top */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
              popup.caught ? "opacity-0" : "opacity-60"
            }`}
            style={{
              top: `-${popup.yPosition}vh`,
              height: `${popup.yPosition}vh`,
              width: "2px",
              background: "linear-gradient(to bottom, transparent, var(--pc-muted))",
            }}
          />

          {/* Hook Icon */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 -top-12 transition-all duration-500 ${
              popup.caught ? "opacity-0 -translate-y-4" : "opacity-100"
            }`}
          >
            <svg width="32" height="48" viewBox="0 0 32 48" className="drop-shadow-lg">
              {/* Line coming down */}
              <line x1="16" y1="0" x2="16" y2="18" stroke="#a0aec0" strokeWidth="2" />
              {/* Hook shape */}
              <path
                d="M16 18 L16 30 Q16 38 10 42 Q4 46 4 40 Q4 34 10 34 Q14 34 16 30"
                stroke="url(#hookGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              {/* Hook point */}
              <path d="M6 38 L4 42 L8 40 Z" fill="var(--pc-gold)" />
              {/* Barb */}
              <line x1="5" y1="40" x2="8" y2="37" stroke="var(--pc-gold)" strokeWidth="2" strokeLinecap="round" />
              <defs>
                <linearGradient id="hookGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a0aec0" />
                  <stop offset="100%" stopColor="var(--pc-gold)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Popup Card */}
          <div
            className={`bg-black/95 backdrop-blur-sm border rounded-xl shadow-2xl transition-all duration-300 overflow-visible ${
              popup.caught
                ? "border-[var(--pc-gold)] shadow-[var(--pc-gold)]/30 scale-105"
                : "border-[var(--pc-accent)]/30 shadow-[var(--pc-accent)]/10 hover:border-[var(--pc-accent)]/50"
            }`}
            style={{ width: popup.caught && expandedPopup === popup.id ? 260 : 200 }}
          >
            {/* Close button */}
            <button
              onClick={() => setPopups((prev) => prev.filter((p) => p.id !== popup.id))}
              className="absolute -top-3 -right-3 w-7 h-7 bg-black border border-[var(--pc-muted)]/40 rounded-full flex items-center justify-center text-[var(--pc-muted)] hover:text-[var(--pc-front)] hover:border-[var(--pc-accent)] transition-colors pointer-events-auto z-20"
              aria-label="Close popup"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            {popup.caught && (
              <div className="bg-gradient-to-r from-[var(--pc-gold)]/20 to-[var(--pc-accent)]/20 px-4 py-2 rounded-t-xl border-b border-[var(--pc-gold)]/30">
                <p className="text-[var(--pc-gold)] text-sm font-medium text-center">{popup.stat.wittyLine}</p>
              </div>
            )}

            <div className="p-4">
              <p className="text-2xl font-bold text-[var(--pc-gold)]">{popup.stat.value}</p>
              <p className="text-xs text-[var(--pc-front)] leading-tight mt-1">{popup.stat.label}</p>
              <p className="text-[10px] text-[var(--pc-muted)] mt-2">{popup.stat.source}</p>

              {popup.caught && (
                <div className="mt-4 space-y-2">
                  {expandedPopup !== popup.id ? (
                    <button
                      onClick={() => setExpandedPopup(popup.id)}
                      className="w-full text-xs text-[var(--pc-accent)] hover:text-[var(--pc-gold)] transition-colors"
                    >
                      Learn more
                    </button>
                  ) : (
                    <>
                      <p className="text-xs text-[var(--pc-muted)] leading-relaxed">
                        Ready to leverage AI effectively? Let's create your roadmap.
                      </p>
                      <button
                        onClick={handleCTAClick}
                        className="w-full bg-gradient-to-r from-[var(--pc-accent)] to-[var(--pc-gold)] text-black px-3 py-2 rounded-lg text-xs font-semibold hover:shadow-lg transition-all"
                      >
                        AI Alignment Assessment
                      </button>
                      <button
                        onClick={handleCTAClick}
                        className="w-full border border-[var(--pc-accent)]/50 text-[var(--pc-accent)] px-3 py-1.5 rounded-lg text-xs hover:bg-[var(--pc-accent)]/10 transition-all"
                      >
                        Train My Team
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes bob {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  )
}
