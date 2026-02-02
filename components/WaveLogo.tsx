export default function WaveLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Port City Social Media wave logo"
    >
      {/* Ocean gradient background circle */}
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00e0b8" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#ffd700" />
        </linearGradient>
        <linearGradient id="waveGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#00e0b8" />
        </linearGradient>
      </defs>
      
      {/* Background circle */}
      <circle cx="24" cy="24" r="22" fill="#000" stroke="url(#waveGradient)" strokeWidth="2" />
      
      {/* Top wave */}
      <path
        d="M8 20 Q14 14, 20 20 T32 20 T44 20"
        stroke="url(#waveGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Middle wave */}
      <path
        d="M4 26 Q12 20, 20 26 T36 26 T48 26"
        stroke="url(#waveGradient2)"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      
      {/* Bottom wave */}
      <path
        d="M6 32 Q14 26, 22 32 T38 32 T48 32"
        stroke="#ffd700"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  )
}
