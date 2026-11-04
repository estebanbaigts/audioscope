export default function StudioImage({ scene, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={scene.image}
        alt={scene.title}
        className="h-full w-full object-cover"
        style={{ objectPosition: scene.position }}
      />
      {/* Soft warm vignette + paper grain */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(120% 100% at 50% 50%, transparent 60%, rgba(13,10,7,0.32) 100%)' }}
      />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>")`,
        }}
      />
    </div>
  )
}
