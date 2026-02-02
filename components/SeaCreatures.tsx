"use client"

import { useEffect, useState } from "react"

interface Creature {
  id: number
  type: "whale" | "dolphin" | "octopus" | "jellyfish" | "turtle"
  x: number
  y: number
  direction: "left" | "right"
  speed: number
  opacity: number
  scale: number
}

const creatureConfigs = {
  whale: {
    width: 180,
    height: 60,
    render: (direction: "left" | "right") => (
      <svg
        width="180"
        height="60"
        viewBox="0 0 180 60"
        style={{ transform: direction === "left" ? "scaleX(-1)" : "none" }}
      >
        {/* Body */}
        <ellipse cx="90" cy="30" rx="70" ry="25" fill="currentColor" opacity="0.6" />
        {/* Head */}
        <ellipse cx="150" cy="30" rx="25" ry="20" fill="currentColor" opacity="0.6" />
        {/* Tail */}
        <path d="M20 30 Q0 15 10 5 Q20 15 20 30 Q20 45 10 55 Q0 45 20 30" fill="currentColor" opacity="0.5" />
        {/* Fin */}
        <path d="M100 10 Q110 -5 120 10 Q110 15 100 10" fill="currentColor" opacity="0.5" />
        {/* Eye */}
        <circle cx="155" cy="25" r="3" fill="var(--pc-bg)" opacity="0.8" />
        {/* Belly line */}
        <path d="M50 35 Q90 45 140 35" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
      </svg>
    ),
  },
  dolphin: {
    width: 100,
    height: 50,
    render: (direction: "left" | "right") => (
      <svg
        width="100"
        height="50"
        viewBox="0 0 100 50"
        style={{ transform: direction === "left" ? "scaleX(-1)" : "none" }}
      >
        {/* Body */}
        <path d="M10 25 Q30 10 70 20 Q90 25 95 25 Q90 25 70 30 Q30 40 10 25" fill="currentColor" opacity="0.6" />
        {/* Dorsal fin */}
        <path d="M45 15 Q50 0 55 15" fill="currentColor" opacity="0.5" />
        {/* Tail */}
        <path d="M5 25 Q0 15 5 10 Q10 18 10 25 Q10 32 5 40 Q0 35 5 25" fill="currentColor" opacity="0.5" />
        {/* Beak */}
        <path d="M95 25 L105 25 L95 27 Z" fill="currentColor" opacity="0.6" />
        {/* Eye */}
        <circle cx="85" cy="23" r="2" fill="var(--pc-bg)" opacity="0.8" />
        {/* Flipper */}
        <ellipse cx="60" cy="32" rx="8" ry="4" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  octopus: {
    width: 80,
    height: 90,
    render: (direction: "left" | "right") => (
      <svg
        width="80"
        height="90"
        viewBox="0 0 80 90"
        style={{ transform: direction === "left" ? "scaleX(-1)" : "none" }}
      >
        {/* Head */}
        <ellipse cx="40" cy="25" rx="25" ry="22" fill="currentColor" opacity="0.5" />
        {/* Eyes */}
        <circle cx="32" cy="22" r="4" fill="var(--pc-bg)" opacity="0.6" />
        <circle cx="48" cy="22" r="4" fill="var(--pc-bg)" opacity="0.6" />
        {/* Tentacles */}
        <path d="M20 40 Q10 55 15 75 Q18 80 20 70 Q22 60 25 45" fill="currentColor" opacity="0.4" />
        <path d="M28 42 Q22 60 25 80 Q28 85 30 75 Q32 65 32 47" fill="currentColor" opacity="0.4" />
        <path d="M36 45 Q34 65 38 85 Q40 88 42 80 Q44 65 42 48" fill="currentColor" opacity="0.4" />
        <path d="M48 45 Q46 65 50 85 Q52 88 54 80 Q56 65 52 47" fill="currentColor" opacity="0.4" />
        <path d="M55 42 Q60 60 57 80 Q54 85 52 75 Q50 65 52 45" fill="currentColor" opacity="0.4" />
        <path d="M60 40 Q70 55 65 75 Q62 80 60 70 Q58 60 57 43" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  },
  jellyfish: {
    width: 50,
    height: 70,
    render: () => (
      <svg width="50" height="70" viewBox="0 0 50 70">
        {/* Bell */}
        <path d="M5 30 Q5 5 25 5 Q45 5 45 30 Q35 35 25 35 Q15 35 5 30" fill="currentColor" opacity="0.4" />
        {/* Tentacles */}
        <path d="M10 32 Q8 45 12 60 Q10 65 8 55 Q6 45 10 32" fill="currentColor" opacity="0.3" />
        <path d="M18 34 Q16 50 20 65 Q18 70 16 58 Q14 48 18 34" fill="currentColor" opacity="0.3" />
        <path d="M25 35 Q25 52 25 68 Q25 70 25 62 Q25 52 25 35" fill="currentColor" opacity="0.3" />
        <path d="M32 34 Q34 50 30 65 Q32 70 34 58 Q36 48 32 34" fill="currentColor" opacity="0.3" />
        <path d="M40 32 Q42 45 38 60 Q40 65 42 55 Q44 45 40 32" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  turtle: {
    width: 70,
    height: 50,
    render: (direction: "left" | "right") => (
      <svg
        width="70"
        height="50"
        viewBox="0 0 70 50"
        style={{ transform: direction === "left" ? "scaleX(-1)" : "none" }}
      >
        {/* Shell */}
        <ellipse cx="35" cy="25" rx="22" ry="18" fill="currentColor" opacity="0.5" />
        {/* Shell pattern */}
        <path d="M35 10 L30 25 L35 40" stroke="var(--pc-bg)" strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M35 10 L40 25 L35 40" stroke="var(--pc-bg)" strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M18 20 Q35 25 52 20" stroke="var(--pc-bg)" strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M18 30 Q35 25 52 30" stroke="var(--pc-bg)" strokeWidth="1" fill="none" opacity="0.3" />
        {/* Head */}
        <ellipse cx="60" cy="25" rx="8" ry="6" fill="currentColor" opacity="0.5" />
        {/* Eye */}
        <circle cx="63" cy="23" r="1.5" fill="var(--pc-bg)" opacity="0.8" />
        {/* Flippers */}
        <ellipse cx="22" cy="12" rx="10" ry="5" fill="currentColor" opacity="0.4" transform="rotate(-30 22 12)" />
        <ellipse cx="22" cy="38" rx="10" ry="5" fill="currentColor" opacity="0.4" transform="rotate(30 22 38)" />
        <ellipse cx="48" cy="12" rx="8" ry="4" fill="currentColor" opacity="0.4" transform="rotate(20 48 12)" />
        <ellipse cx="48" cy="38" rx="8" ry="4" fill="currentColor" opacity="0.4" transform="rotate(-20 48 38)" />
        {/* Tail */}
        <path d="M13 25 L5 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
      </svg>
    ),
  },
}

export default function SeaCreatures() {
  const [creatures, setCreatures] = useState<Creature[]>([])

  useEffect(() => {
    const types: Creature["type"][] = ["whale", "dolphin", "octopus", "jellyfish", "turtle"]
    let idCounter = 0

    const spawnCreature = () => {
      const type = types[Math.floor(Math.random() * types.length)]
      const direction: "left" | "right" = Math.random() > 0.5 ? "left" : "right"
      const config = creatureConfigs[type]

      const newCreature: Creature = {
        id: idCounter++,
        type,
        x: direction === "right" ? -config.width : window.innerWidth + config.width,
        y: 100 + Math.random() * (window.innerHeight - 300),
        direction,
        speed: 0.3 + Math.random() * 0.5,
        opacity: 0.08 + Math.random() * 0.12,
        scale: 0.6 + Math.random() * 0.6,
      }

      setCreatures((prev) => [...prev.slice(-4), newCreature])
    }

    // Spawn initial creature
    setTimeout(spawnCreature, 3000)

    // Spawn creatures periodically
    const interval = setInterval(spawnCreature, 15000 + Math.random() * 10000)

    return () => clearInterval(interval)
  }, [])

  // Animate creatures
  useEffect(() => {
    let animationFrame: number

    const animate = () => {
      setCreatures((prev) =>
        prev
          .map((creature) => {
            const config = creatureConfigs[creature.type]
            const newX = creature.direction === "right" ? creature.x + creature.speed : creature.x - creature.speed

            // Remove if off screen
            if (
              (creature.direction === "right" && newX > window.innerWidth + config.width) ||
              (creature.direction === "left" && newX < -config.width * 2)
            ) {
              return null
            }

            return { ...creature, x: newX }
          })
          .filter(Boolean) as Creature[]
      )

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {creatures.map((creature) => {
        const config = creatureConfigs[creature.type]
        return (
          <div
            key={creature.id}
            className="absolute text-[var(--pc-accent)] transition-opacity duration-1000"
            style={{
              left: creature.x,
              top: creature.y,
              opacity: creature.opacity,
              transform: `scale(${creature.scale})`,
            }}
          >
            {config.render(creature.direction)}
          </div>
        )
      })}
    </div>
  )
}
