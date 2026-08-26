/* ─────────────── LIVE ROOM ─────────────── */
  'live-room': () => (
    <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id="lr-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a87a4f" />
          <stop offset="60%" stopColor="#6b4226" />
          <stop offset="100%" stopColor="#3d2818" />
        </linearGradient>
        <radialGradient id="lr-spot" cx="50%" cy="20%" r="55%">
          <stop offset="0%" stopColor="#f4ece0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="600" height="800" fill="url(#lr-bg)"/>
      <rect width="600" height="800" fill="url(#lr-spot)"/>
      {/* Wood-slat back wall */}
      {Array.from({ length: 14 }).map((_, i) => (
        <rect key={i} x={i * 45} y="0" width="38" height="500" fill="#3d2818" opacity={0.35 + (i % 2) * 0.12}/>
      ))}
      {/* Acoustic panels suggestion */}
      <rect x="90"  y="120" width="120" height="80" fill="#1a1410" opacity="0.55"/>
      <rect x="390" y="120" width="120" height="80" fill="#1a1410" opacity="0.55"/>
      {/* Drum kit silhouette */}
      <ellipse cx="300" cy="600" rx="180" ry="22" fill="#0d0a07" opacity="0.6"/>
      <circle cx="300" cy="540" r="80" fill="#1a1410" stroke="#a87a4f" strokeWidth="2"/>
      <circle cx="300" cy="540" r="68" fill="#3d2818"/>
      <ellipse cx="220" cy="500" rx="35" ry="12" fill="#a87a4f"/>
      <ellipse cx="380" cy="510" rx="40" ry="14" fill="#d8c39a"/>
      <line x1="220" y1="500" x2="220" y2="600" stroke="#1a1410" strokeWidth="3"/>
      <line x1="380" y1="510" x2="380" y2="600" stroke="#1a1410" strokeWidth="3"/>
      {/* Mic stand */}
      <line x1="100" y1="700" x2="100" y2="380" stroke="#1a1410" strokeWidth="3"/>
      <line x1="100" y1="380" x2="170" y2="380" stroke="#1a1410" strokeWidth="3"/>
      <ellipse cx="180" cy="380" rx="14" ry="22" fill="#1a1410" stroke="#a87a4f" strokeWidth="1.5"/>
      <line x1="80" y1="700" x2="120" y2="700" stroke="#1a1410" strokeWidth="3"/>
    </svg>
  ),

  /* ─────────────── VINTAGE SYNTHS ─────────────── */
  'synths': () => (
    <svg viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id="syn-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6b4226"/>
          <stop offset="100%" stopColor="#1a1410"/>
        </linearGradient>
      </defs>
      <rect width="600" height="600" fill="url(#syn-bg)"/>
      {/* Synth body */}
      <rect x="60" y="200" width="480" height="220" rx="10" fill="#1a1410"/>
      <rect x="60" y="200" width="480" height="40" fill="#3d2818"/>
      {/* Knob row */}
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={i}>
          <circle cx={90 + i * 38} cy={270} r="12" fill="#0d0a07" stroke="#a87a4f"/>
          <line x1={90 + i * 38} y1="270" x2={90 + i * 38 + Math.cos((i - 5) * 0.4) * 8}
            y2={270 + Math.sin((i - 5) * 0.4) * 8} stroke="#d8c39a" strokeWidth="2"/>
        </g>
      ))}
      {/* Sliders */}
      {Array.from({ length: 8 }).map((_, i) => (
        <g key={i}>
          <rect x={90 + i * 58} y="305" width="3" height="60" fill="#3d2818"/>
          <rect x={84 + i * 58} y={310 + i * 4} width="15" height="10" fill="#d8c39a"/>
        </g>
      ))}
      {/* Keys */}
      <rect x="60" y="400" width="480" height="20" fill="#3d2818"/>
      {Array.from({ length: 28 }).map((_, i) => (
        <rect key={i} x={62 + i * 17} y="402" width="15" height="16" fill="#f4ece0"/>
      ))}
      {Array.from({ length: 28 }).map((_, i) =>
        ([1, 2, 4, 5, 6].includes(i % 7)) && (
          <rect key={i} x={68 + i * 17} y="402" width="9" height="10" fill="#1a1410"/>
        )
      )}
      {/* Tiny LCD */}
      <rect x="240" y="245" width="120" height="40" rx="2" fill="#1a1410" stroke="#a87a4f"/>
      <rect x="248" y="253" width="104" height="24" fill="#a87a4f" opacity="0.7"/>
      {/* Label tag */}
      <rect x="450" y="220" width="80" height="12" fill="#a87a4f"/>
    </svg>
  ),

  /* ─────────────── VOCAL BOOTH ─────────────── */
  'vocal-booth': () => (
    <svg viewBox="0 0 600 800" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id="vb-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d2818"/>
          <stop offset="100%" stopColor="#0d0a07"/>
        </linearGradient>
        <radialGradient id="vb-light" cx="50%" cy="35%" r="40%">
          <stop offset="0%" stopColor="#d8c39a" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="transparent"/>
        </radialGradient>
      </defs>
      <rect width="600" height="800" fill="url(#vb-bg)"/>
      <rect width="600" height="800" fill="url(#vb-light)"/>
      {/* Foam wedges */}
      {Array.from({ length: 7 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => (
          <polygon
            key={`${row}-${col}`}
            points={`${col * 90},${row * 90} ${col * 90 + 45},${row * 90 + 30} ${col * 90 + 90},${row * 90} ${col * 90 + 90},${row * 90 + 90} ${col * 90 + 45},${row * 90 + 60} ${col * 90},${row * 90 + 90}`}
            fill="#3d2818"
            opacity={0.25 + ((row + col) % 3) * 0.08}
          />
        )),
      )}
      {/* Mic with shock mount */}
      <line x1="300" y1="800" x2="300" y2="500" stroke="#1a1410" strokeWidth="3"/>
      <line x1="300" y1="500" x2="350" y2="500" stroke="#1a1410" strokeWidth="3"/>
      <ellipse cx="380" cy="450" rx="36" ry="60" fill="#3d2818" stroke="#a87a4f" strokeWidth="2"/>
      <ellipse cx="380" cy="430" rx="22" ry="18" fill="#1a1410"/>
      {/* Pop filter */}
      <ellipse cx="300" cy="450" rx="35" ry="35" fill="none" stroke="#a87a4f" strokeWidth="2" opacity="0.6"/>
      <ellipse cx="300" cy="450" rx="35" ry="35" fill="#d8c39a" opacity="0.08"/>
      <line x1="265" y1="450" x2="295" y2="450" stroke="#a87a4f" strokeWidth="1"/>
    </svg>
  ),

  /* ─────────────── TAPE MACHINE ─────────────── */
  'tape': () => (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
      <defs>
        <linearGradient id="tp-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a87a4f"/>
          <stop offset="100%" stopColor="#3d2818"/>
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#tp-bg)"/>
      {/* Tape machine body */}
      <rect x="80" y="80" width="640" height="380" rx="8" fill="#1a1410"/>
      <rect x="80" y="80" width="640" height="60" fill="#3d2818"/>
      {/* Reels */}
      <g transform="translate(220, 250)">
        <circle r="120" fill="#0d0a07" stroke="#a87a4f" strokeWidth="2"/>
        <circle r="100" fill="#1a1410" stroke="#a87a4f" strokeWidth="1"/>
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1="0" y1="0" x2={Math.cos((i / 8) * Math.PI * 2) * 95} y2={Math.sin((i / 8) * Math.PI * 2) * 95} stroke="#3d2818" strokeWidth="3"/>
        ))}
        <circle r="22" fill="#a87a4f"/>
        <circle r="6" fill="#1a1410"/>
      </g>
      <g transform="translate(580, 250)">
        <circle r="120" fill="#0d0a07" stroke="#a87a4f" strokeWidth="2"/>
        <circle r="100" fill="#1a1410" stroke="#a87a4f" strokeWidth="1"/>
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1="0" y1="0" x2={Math.cos((i / 8) * Math.PI * 2 + 0.4) * 95} y2={Math.sin((i / 8) * Math.PI * 2 + 0.4) * 95} stroke="#3d2818" strokeWidth="3"/>
        ))}
        <circle r="22" fill="#a87a4f"/>
        <circle r="6" fill="#1a1410"/>
      </g>
      {/* Tape path */}
      <path d="M 220 130 Q 400 130 580 130" stroke="#3d2818" strokeWidth="3" fill="none"/>
      {/* Heads */}
      <rect x="380" y="120" width="16" height="36" fill="#0d0a07" stroke="#d8c39a"/>
      <rect x="402" y="120" width="16" height="36" fill="#0d0a07" stroke="#d8c39a"/>
      {/* VU meters */}
      <rect x="100" y="100" width="60" height="22" rx="2" fill="#0d0a07"/>
      <rect x="105" y="105" width="50" height="13" fill="#d8c39a" opacity="0.85"/>
      <rect x="640" y="100" width="60" height="22" rx="2" fill="#0d0a07"/>
      <rect x="645" y="105" width="50" height="13" fill="#d8c39a" opacity="0.85"/>
    </svg>
  ),
}