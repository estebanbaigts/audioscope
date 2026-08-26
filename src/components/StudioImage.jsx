// Studio scene placeholder. Renders one of 5 distinct "photos" via SVG.
// Each scene has warm lighting + silhouettes to suggest the actual room.
// Replace with <img src={...} /> when real photos arrive.

const scenes = {
  'control-room': () => (
    <img
      src="/images/regie1.jpg"
      alt="Control room studio AudioScope"
      className="h-full w-full object-cover"
    />
  ),

  'live-room': () => (
    <img
      src="/images/liveroom.jpg"
      alt="Live room studio AudioScope"
      className="h-full w-full object-cover object-center"
    />
  ),

  'synths': () => (
    <img
      src="/images/rack.jpg"
      alt="Synths studio AudioScope"
      className="h-full w-full object-cover object-left"
    />
  ),

  'vocal-booth': () => (
    <img
      src="/images/patio.jpg"
      alt="Vocal booth AudioScope"
      className="h-full w-full object-cover object-right"
    />
  ),

  'tape': () => (
    <img
      src="/images/recorder.jpg"
      alt="Analog gear AudioScope"
      className="h-full w-full object-cover object-bottom"
    />
  ),
}

export default function StudioImage({ scene, className = '' }) {
  const Render = scenes[scene.kind]
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {Render ? <Render /> : <div className="h-full w-full bg-coffee" />}
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
