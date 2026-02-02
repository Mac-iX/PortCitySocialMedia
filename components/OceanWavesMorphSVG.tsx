"use client"

type Props = {
  tint?: "teal" | "gold"
  intensity?: 0 | 1 | 2 // 0 subtle, 1 medium, 2 bold
  speed?: number // 0.5–2
}

export default function OceanWavesMorphSVG({ tint = "teal", intensity = 1, speed = 1 }: Props) {
  const top = tint === "gold" ? "#ffd479" : "#7fd0ff"
  const mid = tint === "gold" ? "#ffc64f" : "#4fb7ff"
  const deep = tint === "gold" ? "#e9a92a" : "#2d93c8"
  const bgA = tint === "gold" ? "#0b0f15" : "#071524"
  const bgB = tint === "gold" ? "#0f141c" : "#0a2034"
  const bgC = tint === "gold" ? "#080b11" : "#06121c"

  // opacity ramp by intensity
  const op = [0.18, 0.26, 0.34][intensity]

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="bg-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={bgA} />
            <stop offset="60%" stopColor={bgB} />
            <stop offset="100%" stopColor={bgC} />
          </linearGradient>

          {/* subtle shimmer */}
          <filter id="shimmer">
            <feTurbulence type="fractalNoise" baseFrequency="0.0025" numOctaves="2" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        <rect width="1440" height="900" fill="url(#bg-grad)" />

        {/* Group with shimmer and lowered opacity */}
        <g filter="url(#shimmer)" opacity={op}>
          {/* LAYER 1 — top (morph + drift) */}
          <path fill={top}>
            <animate
              attributeName="d"
              dur={`${14 / speed}s`}
              repeatCount="indefinite"
              values="
                M0,180 C220,140 360,200 560,170 C760,140 960,200 1200,170 C1300,160 1440,190 1440,190 L1440,0 L0,0 Z;
                M0,170 C200,210 420,140 620,190 C820,240 1000,150 1200,200 C1300,220 1440,160 1440,160 L1440,0 L0,0 Z;
                M0,180 C220,140 360,200 560,170 C760,140 960,200 1200,170 C1300,160 1440,190 1440,190 L1440,0 L0,0 Z
              "
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="80 0"
              dur={`${18 / speed}s`}
              repeatCount="indefinite"
            />
          </path>

          {/* LAYER 2 — mid (morph + reverse drift) */}
          <path fill={mid} fillOpacity="0.85">
            <animate
              attributeName="d"
              dur={`${18 / speed}s`}
              repeatCount="indefinite"
              values="
                M0,340 C240,320 420,370 640,330 C860,290 1060,350 1240,330 C1320,320 1440,340 1440,340 L1440,0 L0,0 Z;
                M0,320 C220,360 460,300 680,350 C900,400 1080,310 1240,360 C1340,380 1440,300 1440,300 L1440,0 L0,0 Z;
                M0,340 C240,320 420,370 640,330 C860,290 1060,350 1240,330 C1320,320 1440,340 1440,340 L1440,0 L0,0 Z
              "
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="-120 0"
              dur={`${22 / speed}s`}
              repeatCount="indefinite"
            />
          </path>

          {/* LAYER 3 — deep (morph + drift) */}
          <path fill={deep} fillOpacity="0.75">
            <animate
              attributeName="d"
              dur={`${22 / speed}s`}
              repeatCount="indefinite"
              values="
                M0,520 C260,500 460,560 700,520 C940,480 1120,540 1300,520 C1360,510 1440,520 1440,520 L1440,0 L0,0 Z;
                M0,540 C240,520 480,580 700,540 C920,500 1120,560 1300,540 C1380,530 1440,560 1440,560 L1440,0 L0,0 Z;
                M0,520 C260,500 460,560 700,520 C940,480 1120,540 1300,520 C1360,510 1440,520 1440,520 L1440,0 L0,0 Z
              "
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="70 0"
              dur={`${26 / speed}s`}
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>

      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          svg .motion,
          svg animate,
          svg animateTransform {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
