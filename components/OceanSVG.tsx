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

          <filter id="shimmer">
            <feTurbulence type="fractalNoise" baseFrequency="0.008" numOctaves="3" seed="3" result="noise">
              <animate attributeName="baseFrequency" values="0.008;0.012;0.008" dur="8s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
          </filter>

          <filter id="splash">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="4" seed="7" result="splash-noise">
              <animate attributeName="baseFrequency" values="0.02;0.035;0.02" dur="4s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="splash-noise" scale="8" />
          </filter>

          <linearGradient id="neonGrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#00E0B8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#FFD700" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00E0B8" stopOpacity="0.4" />
          </linearGradient>

          <radialGradient id="headerSplash" cx="50%" cy="20%" r="60%">
            <stop offset="0%" stopColor="#00E0B8" stopOpacity="0.15" />
            <stop offset="40%" stopColor="#4fb7ff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        <rect width="1440" height="900" fill="url(#grad)" />

        <ellipse cx="720" cy="180" rx="600" ry="120" fill="url(#headerSplash)" filter="url(#splash)" opacity="0.6">
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1 1;1.2 0.8;1 1"
            dur="6s"
            repeatCount="indefinite"
          />
          <animate attributeName="opacity" values="0.6;0.8;0.6" dur="4s" repeatCount="indefinite" />
        </ellipse>

        <g className="motion" filter="url(#shimmer)" opacity="0.3">
          <path
            fill="url(#neonGrad)"
            fillOpacity="0.35"
            d="M0,160 C180,120 360,200 540,150 C720,100 900,180 1080,140 C1260,120 1440,170 1440,170 L1440,0 L0,0 Z"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0;80 -10;0 0"
              dur="15s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="d"
              values="M0,160 C180,120 360,200 540,150 C720,100 900,180 1080,140 C1260,120 1440,170 1440,170 L1440,0 L0,0 Z;
                      M0,180 C200,140 340,220 560,170 C740,120 920,200 1100,160 C1280,140 1440,190 1440,190 L1440,0 L0,0 Z;
                      M0,160 C180,120 360,200 540,150 C720,100 900,180 1080,140 C1260,120 1440,170 1440,170 L1440,0 L0,0 Z"
              dur="12s"
              repeatCount="indefinite"
            />
          </path>

          <path
            fill="#4fb7ff"
            fillOpacity="0.25"
            d="M0,300 C200,260 380,360 560,290 C740,240 920,340 1100,290 C1280,260 1440,310 1440,310 L1440,0 L0,0 Z"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0;-100 5;0 0"
              dur="18s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="d"
              values="M0,300 C200,260 380,360 560,290 C740,240 920,340 1100,290 C1280,260 1440,310 1440,310 L1440,0 L0,0 Z;
                      M0,320 C220,280 360,380 580,310 C760,260 940,360 1120,310 C1300,280 1440,330 1440,330 L1440,0 L0,0 Z;
                      M0,300 C200,260 380,360 560,290 C740,240 920,340 1100,290 C1280,260 1440,310 1440,310 L1440,0 L0,0 Z"
              dur="16s"
              repeatCount="indefinite"
            />
          </path>

          <path
            fill="#2d93c8"
            fillOpacity="0.22"
            d="M0,460 C220,420 400,520 580,450 C760,400 940,500 1120,450 C1300,420 1440,470 1440,470 L1440,0 L0,0 Z"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0;70 -5;0 0"
              dur="22s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="d"
              values="M0,460 C220,420 400,520 580,450 C760,400 940,500 1120,450 C1300,420 1440,470 1440,470 L1440,0 L0,0 Z;
                      M0,480 C240,440 380,540 600,470 C780,420 960,520 1140,470 C1320,440 1440,490 1440,490 L1440,0 L0,0 Z;
                      M0,460 C220,420 400,520 580,450 C760,400 940,500 1120,450 C1300,420 1440,470 1440,470 L1440,0 L0,0 Z"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        <g className="neon-particles" opacity="0.4">
          <circle cx="200" cy="100" r="2" fill="#00E0B8">
            <animate attributeName="cy" values="100;80;100" dur="8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="150" r="1.5" fill="#FFD700">
            <animate attributeName="cy" values="150;120;150" dur="10s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle cx="1200" cy="120" r="2.5" fill="#00E0B8">
            <animate attributeName="cy" values="120;90;120" dur="12s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="8s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

      <style jsx>{`
        .ocean-svg{
          position:fixed; inset:0; z-index:-1; pointer-events:none;
        }
        @media (prefers-reduced-motion: reduce){
          .ocean-svg .motion, .ocean-svg .neon-particles{ display:none; }
        }
      `}</style>
    </div>
  )
}
