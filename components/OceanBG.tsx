"use client"

// components/OceanSVG.tsx
export default function OceanSVG() {
  return (
    <div className="ocean-svg" aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#071524" />
            <stop offset="60%" stopColor="#0a2034" />
            <stop offset="100%" stopColor="#06121c" />
          </linearGradient>

          {/* very subtle ripple */}
          <filter id="shimmer">
            <feTurbulence type="fractalNoise" baseFrequency="0.003" numOctaves="2" seed="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        <rect width="1440" height="900" fill="url(#grad)" />

        <g className="motion" filter="url(#shimmer)" opacity="0.25">
          {/* top wave */}
          <path
            fill="#7fd0ff"
            fillOpacity="0.25"
            d="M0,160 C180,130 360,190 540,160 C720,130 900,170 1080,150 C1260,130 1440,160 1440,160 L1440,0 L0,0 Z"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="60 0"
              dur="18s"
              repeatCount="indefinite"
            />
          </path>
          {/* mid wave */}
          <path
            fill="#4fb7ff"
            fillOpacity="0.20"
            d="M0,300 C200,280 380,340 560,300 C740,260 920,320 1100,300 C1280,280 1440,300 1440,300 L1440,0 L0,0 Z"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="-80 0"
              dur="22s"
              repeatCount="indefinite"
            />
          </path>
          {/* deep wave */}
          <path
            fill="#2d93c8"
            fillOpacity="0.18"
            d="M0,460 C220,440 400,500 580,460 C760,420 940,480 1120,460 C1300,440 1440,460 1440,460 L1440,0 L0,0 Z"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 0"
              to="50 0"
              dur="26s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>

      <style jsx>{`
        .ocean-svg{
          position:fixed; inset:0; z-index:-1; pointer-events:none;
        }
        @media (prefers-reduced-motion: reduce){
          .ocean-svg .motion{ display:none; }
        }
      `}</style>
    </div>
  )
}
