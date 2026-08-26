import { useRef } from 'react'

// Lightweight pointer-tracked 3D tilt — no dependency, plain CSS transforms.
// Wrap any card content; the tilt + a moving specular highlight follow the cursor.
export default function TiltCard({ children, className = '', maxTilt = 10, style }) {
  const ref = useRef(null)

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const ry = (px - 0.5) * maxTilt * 2
    const rx = (0.5 - py) * maxTilt * 2
    el.style.setProperty('--rx', `${rx}deg`)
    el.style.setProperty('--ry', `${ry}deg`)
    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)
    el.style.setProperty('--glow', '0.9')
  }

  function handleLeave() {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--glow', '0')
  }

  return (
    <div style={{ perspective: '900px' }} className={className}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          transform: 'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1)',
          ...style,
        }}
        className="group/tilt relative h-full w-full will-change-transform"
      >
        {children}
        {/* Specular highlight that tracks the cursor */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-[var(--glow,0)] transition-opacity duration-500"
          style={{
            background:
              'radial-gradient(220px circle at var(--mx,50%) var(--my,50%), rgba(244,236,224,0.35), transparent 60%)',
            mixBlendMode: 'overlay',
          }}
        />
      </div>
    </div>
  )
}
