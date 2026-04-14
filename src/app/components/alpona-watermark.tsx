export function AlponaWatermark({ className }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="-100 -100 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Center dot */}
        <circle cx="400" cy="400" r="8" fill="currentColor" stroke="none" />
        
        {/* Concentric circles */}
        <circle cx="400" cy="400" r="30" />
        <circle cx="400" cy="400" r="45" strokeDasharray="6 8" />
        <circle cx="400" cy="400" r="60" />
        
        {/* Inner Petals (8) */}
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={`inner-petal-${i}`}
            d="M400 340 C430 270, 440 220, 400 160 C360 220, 370 270, 400 340 Z"
            transform={`rotate(${i * 45} 400 400)`}
          />
        ))}

        {/* Mid Rings */}
        <circle cx="400" cy="400" r="250" />
        <circle cx="400" cy="400" r="265" strokeWidth="1.5" />

        {/* Outer wavy border (scallops) */}
        {Array.from({ length: 24 }).map((_, i) => (
          <g key={`scallop-${i}`} transform={`rotate(${i * 15} 400 400)`}>
            <path d="M400 135 A 45 45 0 0 1 468.58 144.03" />
            <g transform={`rotate(7.5 400 400)`}>
              <circle cx="400" cy="115" r="4" fill="currentColor" stroke="none" />
              <line x1="400" y1="125" x2="400" y2="135" />
            </g>
          </g>
        ))}

        {/* Large outer teardrop motifs (8) */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`teardrop-${i}`} transform={`rotate(${i * 45 + 22.5} 400 400)`}>
            <path d="M400 135 C440 60, 460 -10, 400 -50 C340 -10, 360 60, 400 135 Z" />
            <circle cx="400" cy="40" r="6" fill="currentColor" stroke="none" />
            <circle cx="400" cy="0" r="4" fill="currentColor" stroke="none" />
            <circle cx="400" cy="-25" r="2" fill="currentColor" stroke="none" />
          </g>
        ))}
      </g>
    </svg>
  );
}
