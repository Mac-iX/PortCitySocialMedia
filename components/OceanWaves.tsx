"use client"

export default function OceanWaves() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg
        className="absolute bottom-0 left-0 w-full h-96 opacity-20"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="oceanGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--pc-accent)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--pc-accent)" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="oceanGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--pc-gold)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--pc-accent)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="foamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--pc-front)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--pc-front)" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Deep ocean wave */}
        <path
          fill="url(#oceanGradient1)"
          d="M0,160 C240,140 480,180 720,160 C960,140 1200,180 1440,160 L1440,400 L0,400 Z"
        >
          <animate
            attributeName="d"
            values="M0,160 C240,140 480,180 720,160 C960,140 1200,180 1440,160 L1440,400 L0,400 Z;
                    M0,180 C240,160 480,140 720,180 C960,200 1200,160 1440,180 L1440,400 L0,400 Z;
                    M0,160 C240,140 480,180 720,160 C960,140 1200,180 1440,160 L1440,400 L0,400 Z"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>

        {/* Mid ocean wave */}
        <path
          fill="url(#oceanGradient2)"
          d="M0,200 C360,180 720,220 1080,200 C1260,190 1350,210 1440,200 L1440,400 L0,400 Z"
        >
          <animate
            attributeName="d"
            values="M0,200 C360,180 720,220 1080,200 C1260,190 1350,210 1440,200 L1440,400 L0,400 Z;
                    M0,220 C360,200 720,180 1080,220 C1260,230 1350,190 1440,220 L1440,400 L0,400 Z;
                    M0,200 C360,180 720,220 1080,200 C1260,190 1350,210 1440,200 L1440,400 L0,400 Z"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>

        {/* Surface foam wave */}
        <path
          fill="url(#foamGradient)"
          d="M0,240 C180,220 360,260 540,240 C720,220 900,260 1080,240 C1260,220 1350,250 1440,240 L1440,400 L0,400 Z"
        >
          <animate
            attributeName="d"
            values="M0,240 C180,220 360,260 540,240 C720,220 900,260 1080,240 C1260,220 1350,250 1440,240 L1440,400 L0,400 Z;
                    M0,250 C180,230 360,270 540,250 C720,230 900,270 1080,250 C1260,230 1350,260 1440,250 L1440,400 L0,400 Z;
                    M0,240 C180,220 360,260 540,240 C720,220 900,260 1080,240 C1260,220 1350,250 1440,240 L1440,400 L0,400 Z"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      <div className="absolute inset-0">
        {/* Ocean spray particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`spray-${i}`}
            className="absolute rounded-full bg-[var(--pc-accent)]"
            style={{
              width: `${2 + (i % 3)}px`,
              height: `${2 + (i % 3)}px`,
              left: `${5 + i * 4.5}%`,
              bottom: `${15 + (i % 6) * 8}%`,
              opacity: 0.3,
              animation: `oceanSpray ${3 + (i % 4)}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}

        {/* Wave crests */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`crest-${i}`}
            className="absolute bg-[var(--pc-front)] rounded-full"
            style={{
              width: `${4 + (i % 2) * 2}px`,
              height: `${1 + (i % 2)}px`,
              left: `${10 + i * 12}%`,
              bottom: `${20 + (i % 4) * 5}%`,
              opacity: 0.15,
              animation: `waveCrest ${5 + i}s linear infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}

        {/* Underwater bubbles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`underwater-${i}`}
            className="absolute border border-[var(--pc-accent)] rounded-full"
            style={{
              width: `${3 + (i % 3)}px`,
              height: `${3 + (i % 3)}px`,
              left: `${8 + i * 7}%`,
              bottom: `${5 + (i % 8) * 4}%`,
              opacity: 0.2,
              animation: `underwaterBubble ${6 + (i % 5)}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes oceanSpray {
          0% { 
            transform: translateY(0px) translateX(0px) scale(1); 
            opacity: 0.3; 
          }
          30% { 
            transform: translateY(-25px) translateX(15px) scale(1.4); 
            opacity: 0.6; 
          }
          60% { 
            transform: translateY(-15px) translateX(-8px) scale(0.8); 
            opacity: 0.4; 
          }
          100% { 
            transform: translateY(-40px) translateX(20px) scale(0.3); 
            opacity: 0; 
          }
        }

        @keyframes waveCrest {
          0% { 
            transform: translateX(-20px) scaleX(1); 
            opacity: 0.15; 
          }
          50% { 
            transform: translateX(10px) scaleX(1.5); 
            opacity: 0.25; 
          }
          100% { 
            transform: translateX(40px) scaleX(0.5); 
            opacity: 0; 
          }
        }

        @keyframes underwaterBubble {
          0% { 
            transform: translateY(0px) scale(1); 
            opacity: 0.2; 
          }
          50% { 
            transform: translateY(-50px) scale(1.2); 
            opacity: 0.4; 
          }
          100% { 
            transform: translateY(-100px) scale(0.3); 
            opacity: 0; 
          }
        }
      `}</style>
    </div>
  )
}
