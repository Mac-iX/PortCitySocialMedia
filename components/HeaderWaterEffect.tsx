"use client"

export default function HeaderWaterEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="header-water-container">
        <svg className="header-waves" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="headerWaveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--pc-accent)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="var(--pc-gold)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--pc-accent)" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="headerWaveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--pc-gold)" stopOpacity="0.15" />
              <stop offset="50%" stopColor="var(--pc-accent)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="var(--pc-gold)" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="headerWaveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--pc-accent)" stopOpacity="0.1" />
              <stop offset="50%" stopColor="var(--pc-gold)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="var(--pc-accent)" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Multiple wave layers for oceanic depth */}
          <path
            className="header-wave-1"
            d="M0,60 C300,20 600,100 900,60 C1050,40 1150,80 1200,60 L1200,0 L0,0 Z"
            fill="url(#headerWaveGradient1)"
          />

          <path
            className="header-wave-2"
            d="M0,80 C250,40 550,120 850,80 C1000,60 1100,100 1200,80 L1200,0 L0,0 Z"
            fill="url(#headerWaveGradient2)"
          />

          <path
            className="header-wave-3"
            d="M0,100 C200,60 500,140 800,100 C950,80 1050,120 1200,100 L1200,0 L0,0 Z"
            fill="url(#headerWaveGradient3)"
          />

          {/* Additional oceanic wave layers */}
          <path
            className="header-wave-1"
            d="M0,40 C350,10 650,90 950,40 C1100,20 1180,60 1200,40 L1200,0 L0,0 Z"
            fill="url(#headerWaveGradient1)"
            opacity="0.6"
          />

          <path
            className="header-wave-2"
            d="M0,120 C280,80 580,160 880,120 C1020,100 1120,140 1200,120 L1200,0 L0,0 Z"
            fill="url(#headerWaveGradient2)"
            opacity="0.4"
          />
        </svg>
      </div>

      <div className="header-bubbles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="header-bubble neon-golden-bubble rising-bubble"
            style={{
              left: `${5 + i * 6}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="floating-neon-bubbles">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="floating-bubble rising-bubble"
            style={{
              left: `${8 + i * 9}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${10 + i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced splash effects */}
      <div className="header-splash-container">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="header-splash"
            style={{
              left: `${12 + i * 12}%`,
              animationDelay: `${i * 1.0}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="currentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--pc-accent)" stopOpacity="0.05" />
              <stop offset="100%" stopColor="var(--pc-gold)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <path
              key={i}
              d={`M0,${30 + i * 25} Q300,${10 + i * 25} 600,${30 + i * 25} T1200,${30 + i * 25}`}
              stroke="url(#currentGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i * 0.5}s`,
              }}
            />
          ))}
        </svg>
      </div>
    </div>
  )
}
