"use client"

export default function OceanWaveBackground() {
  return (
    <div className="fixed inset-0 z-[-2] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(60deg, var(--pc-bg) 0%, rgba(0, 224, 184, 0.3) 50%, rgba(255, 215, 0, 0.2) 100%)",
        }}
      />

      {/* Splash elements - bubbles and droplets */}
      <div className="absolute bottom-[20vh] left-0 w-full h-[30vh] overflow-hidden z-[1]">
        {[10, 20, 40, 60, 80].map((left, index) => (
          <div
            key={`bubble-${index}`}
            className="absolute bottom-[-50px] rounded-full animate-bubble-rise"
            style={{
              left: `${left}%`,
              animationDelay: `${index * 0.5 + 1}s`,
              animationDuration: `${4 + index}s`,
              width: `${15 + index * 3}px`,
              height: `${15 + index * 3}px`,
              background: "rgba(0, 224, 184, 0.2)",
              border: "2px solid rgba(0, 224, 184, 0.6)",
              boxShadow: "0 0 15px rgba(0, 224, 184, 0.4), inset 0 0 10px rgba(255, 215, 0, 0.2)",
            }}
          />
        ))}

        {[10, 30, 50, 70, 90].map((left, index) => (
          <div
            key={`droplet-${index}`}
            className="absolute bottom-0 w-2.5 h-2.5 rounded-full animate-splash-up"
            style={{
              left: `${left}%`,
              background: "rgba(0, 224, 184, 0.8)",
              boxShadow: "0 0 8px rgba(255, 215, 0, 0.6)",
              animationDelay: `${0.2 + index * 0.3}s`,
            }}
          />
        ))}
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full z-[1]"
        style={{ height: "20vh", minHeight: "150px", maxHeight: "200px" }}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 224, 184, 0.7)" />
            <stop offset="50%" stopColor="rgba(255, 215, 0, 0.5)" />
            <stop offset="100%" stopColor="rgba(0, 224, 184, 0.7)" />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 215, 0, 0.5)" />
            <stop offset="50%" stopColor="rgba(0, 224, 184, 0.4)" />
            <stop offset="100%" stopColor="rgba(255, 215, 0, 0.5)" />
          </linearGradient>
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            className="animate-wave-1"
            style={{ fill: "url(#waveGradient1)" }}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            className="animate-wave-2"
            style={{ fill: "url(#waveGradient2)" }}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            className="animate-wave-3"
            style={{ fill: "rgba(0, 224, 184, 0.3)" }}
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            className="animate-wave-4"
            style={{ fill: "rgba(247, 250, 252, 0.9)" }}
          />
        </g>
      </svg>
    </div>
  )
}
