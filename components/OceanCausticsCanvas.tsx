// components/OceanCausticsCanvas.tsx
"use client"
import { useEffect, useRef } from "react"

type Props = {
  tint?: "teal" | "gold"
  intensity?: 0 | 1 | 2 // glow/contrast level
  speed?: number // 0.5–2
}

export default function OceanCausticsCanvas({ tint = "teal", intensity = 1, speed = 1 }: Props) {
  const ref = useRef<HTMLCanvasElement | null>(null)
  const animRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext("2d", { alpha: true })!
    let running = true

    // render low-res and scale up for softness + perf
    const DPR = Math.min(2, window.devicePixelRatio || 1)
    const baseW = 360
    const baseH = 240

    function resize() {
      const vw = window.innerWidth
      const vh = window.innerHeight
      canvas.style.width = vw + "px"
      canvas.style.height = vh + "px"
      canvas.width = Math.floor(baseW * DPR)
      canvas.height = Math.floor(baseH * DPR)
      ctx.scale(DPR, DPR)
    }
    resize()
    window.addEventListener("resize", resize)

    // palette
    const bg = tint === "gold" ? "#0b0f15" : "#071524"
    const c1 = tint === "gold" ? "#ffd479" : "#7fd0ff"
    const c2 = tint === "gold" ? "#ffc64f" : "#4fb7ff"
    const c3 = tint === "gold" ? "#e9a92a" : "#2d93c8"

    // intensity ramp
    const alpha1 = [0.12, 0.18, 0.25][intensity]
    const alpha2 = [0.09, 0.14, 0.2][intensity]
    const alpha3 = [0.07, 0.11, 0.16][intensity]

    let t = 0

    function draw() {
      if (!running) return
      t += 0.016 * speed

      // clear bg
      ctx.clearRect(0, 0, baseW, baseH)
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, baseW, baseH)

      // caustic stripes using sin blends
      ctx.globalCompositeOperation = "lighter"

      function stripe(color: string, a: number, f1: number, f2: number, amp: number, yoff: number, xscroll: number) {
        ctx.beginPath()
        for (let x = 0; x <= baseW; x++) {
          const y =
            baseH * 0.3 +
            yoff +
            Math.sin(x * 0.03 + t * f1 + xscroll) * amp +
            Math.sin(x * 0.015 - t * f2) * (amp * 0.6)
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = color
        ctx.globalAlpha = a
        ctx.lineWidth = 2.2
        ctx.stroke()
      }

      stripe(c1, alpha1, 1.2, 0.7, 14, -16 + Math.sin(t * 0.4) * 4, t * 1.1)
      stripe(c2, alpha2, 1.0, 0.6, 18, 10 + Math.cos(t * 0.3) * 5, -t * 0.9)
      stripe(c3, alpha3, 0.8, 0.5, 22, 40 + Math.sin(t * 0.5) * 6, t * 0.6)

      // soft glow veil
      const grad = ctx.createRadialGradient(baseW * 0.5, baseH * 0.15, 10, baseW * 0.5, baseH * 0.2, baseH * 0.9)
      grad.addColorStop(0, "rgba(255,255,255,0.06)")
      grad.addColorStop(1, "transparent")
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = "screen"
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, baseW, baseH)

      animRef.current = requestAnimationFrame(draw)
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!mq.matches) draw()

    return () => {
      running = false
      if (animRef.current) cancelAnimationFrame(animRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [tint, intensity, speed])

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
      style={{ background: "radial-gradient(130% 100% at 50% 0%, #0a1220 0%, #06131f 60%, #040a12 100%)" }}
    >
      <canvas
        ref={ref}
        className="w-full h-full"
        style={{
          filter: "blur(8px) saturate(1.05) brightness(1.02)",
          opacity: 0.9,
        }}
      />
    </div>
  )
}
