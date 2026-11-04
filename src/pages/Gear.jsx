import { useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TiltCard from '../components/TiltCard.jsx'
import { gearCategories, gearStats } from '../data/gear.js'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.1 },
  }),
}

export default function Gear() {
  const [active, setActive] = useState('all')

  const visibleCategories = useMemo(
    () => (active === 'all' ? gearCategories : gearCategories.filter((c) => c.id === active)),
    [active],
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <StatsStrip />

      {/* ───────────────── FILTER + GRID ───────────────── */}
      <section className="relative bg-sand py-20 text-coal sm:py-28">
        <div className="grain absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-[var(--gutter)]">
          <div className="sticky top-16 z-10 -mx-[var(--gutter)] mb-14 border-b border-coal/10 bg-sand px-[var(--gutter)] py-4 sm:top-20">
            <div className="no-scrollbar flex gap-2 overflow-x-auto">
              <FilterPill label="Tout" active={active === 'all'} onClick={() => setActive('all')} />
              {gearCategories.map((c) => (
                <FilterPill
                  key={c.id}
                  label={c.short}
                  active={active === c.id}
                  onClick={() => setActive(c.id)}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-20"
            >
              {visibleCategories.map((cat, ci) => (
                <div key={cat.id}>
                  <motion.h2
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7 }}
                    className="text-display-sm font-bold text-balance"
                  >
                    {cat.label}
                  </motion.h2>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cat.brands.map((brand, bi) => (
                      <BrandCard key={brand.name} brand={brand} accent={cat.accent} index={bi} />
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ───────────────── PDF FALLBACK ───────────────── */}
      <section className="relative bg-coal py-16 text-cream sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-[var(--gutter)] sm:flex-row sm:items-center">
          <p className="max-w-md text-sm leading-relaxed text-cream/65">
            Une liste complète évolue en permanence pour une version imprimable, la fiche technique reste disponible en PDF.
          </p>
          <a
            href="/fichetech.pdf"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-editorial text-cream/70 hover:text-cream"
          >
            Télécharger le PDF
            <span className="transition group-hover:translate-y-0.5">↓</span>
          </a>
        </div>
      </section>
    </motion.div>
  )
}

/* ──────────────────── Hero — 3D layered rack ──────────────────── */

function Hero() {
  const wrapRef = useRef(null)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  function handleMove(e) {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setTilt({ rx: (0.5 - py) * 10, ry: (px - 0.5) * 14 })
  }

  function handleLeave() {
    setTilt({ rx: 0, ry: 0 })
  }

  return (
    <section
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative isolate overflow-hidden bg-coal pb-24 pt-32 text-cream sm:pb-32 sm:pt-40"
    >
      <div className="warm-halo drift" />
      <div className="grain absolute inset-0" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-[var(--gutter)] lg:grid-cols-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <span className="text-[10px] uppercase tracking-editorial text-cream/60">
            ◇ §02 — Fiche technique
          </span>
          <h1 className="mt-4 text-display-lg font-bold text-balance">
            Le matériel<br />
            <em className="italic font-medium text-warm">du studio.</em>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-cream/70">
            Microphones, préamplis, outboard et backline la collection analogique
            réunie salle par salle, à explorer plutôt qu'à imprimer.
          </p>
        </motion.div>

        {/* 3D rack — layered panels tilting with the cursor */}
        <div className="lg:col-span-5" style={{ perspective: '1200px' }}>
          <div
            className="relative mx-auto h-64 w-full max-w-sm"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <RackPanel z={0} y={0} label="PREAMP · 1073" accent="#6b4226" dim={0.55} />
            <RackPanel z={44} y={72} label="COMP · 1176" accent="#a87a4f" dim={0.78} />
            <RackPanel z={88} y={144} label="OUTBOARD · EL8X" accent="#d8c39a" dim={1} />
          </div>
        </div>
      </div>
    </section>
  )
}

function RackPanel({ z, y, label, accent, dim = 1 }) {
  return (
    <div
      className="absolute inset-x-4 h-20 rounded-xl border border-cream/15 bg-ink shadow-[0_30px_60px_-25px_rgba(0,0,0,0.8)]"
      style={{ transform: `translateZ(${z}px) translateY(${y}px)`, opacity: 0.55 + dim * 0.45 }}
    >
      <div className="flex h-full items-center justify-between px-5">
        <div className="flex items-center gap-4">
          <Knob accent={accent} />
          <Knob accent={accent} small />
          <Knob accent={accent} small />
        </div>
        <span
          className="text-[10px] uppercase tracking-editorial"
          style={{ color: `rgba(244,236,224,${0.35 + dim * 0.4})` }}
        >
          {label}
        </span>
      </div>
      {/* faux rack screws */}
      <span className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-cream/20" />
      <span className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-cream/20" />
      <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cream/20" />
      <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-cream/20" />
    </div>
  )
}

function Knob({ accent, small }) {
  const size = small ? 'h-6 w-6' : 'h-9 w-9'
  return (
    <span
      className={`relative inline-block ${size} rounded-full`}
      style={{
        background: `radial-gradient(circle at 35% 30%, ${accent}, #1a1410 75%)`,
        boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(0,0,0,0.6), 0 4px 10px rgba(0,0,0,0.5)',
      }}
    >
      <span
        className="absolute left-1/2 top-1 h-2 w-[1.5px] -translate-x-1/2 rounded-full bg-cream/80"
        style={{ transformOrigin: '50% 400%' }}
      />
    </span>
  )
}

/* ──────────────────── Stats strip ──────────────────── */

function StatsStrip() {
  return (
    <section className="relative bg-ink py-10 text-cream sm:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-[var(--gutter)] sm:grid-cols-4">
        {gearStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
          >
            <span className="block text-display-sm font-bold text-warm">{s.n}</span>
            <span className="mt-1 block text-[11px] uppercase tracking-editorial text-cream/55">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ──────────────────── Filter pill ──────────────────── */

function FilterPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-none rounded-full border px-4 py-2 text-[11px] uppercase tracking-editorial transition-colors duration-300 ${
        active
          ? 'border-coal bg-coal text-cream'
          : 'border-coal/25 text-coffee/70 hover:border-coal/50 hover:text-coal'
      }`}
    >
      {label}
    </button>
  )
}

/* ──────────────────── Brand card — 3D tilt ──────────────────── */

function BrandCard({ brand, accent, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <TiltCard maxTilt={7} className="h-full">
        <div
          className="relative h-full overflow-hidden rounded-2xl border border-coal/15 bg-cream p-6 shadow-[0_20px_45px_-30px_rgba(14,10,6,0.5)]"
          style={{ transform: 'translateZ(0px)' }}
        >
          <div
            className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-20 blur-2xl"
            style={{ background: accent }}
          />
          <div className="relative">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: accent, transform: 'translateZ(30px)' }}
            />
            <h3
              className="mt-3 text-xl font-bold tracking-tight2 text-coal"
              style={{ transform: 'translateZ(24px)' }}
            >
              {brand.name}
            </h3>
          </div>

          <ul className="relative mt-5 space-y-1.5" style={{ transform: 'translateZ(14px)' }}>
            {brand.items.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-coffee/75">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </TiltCard>
    </motion.div>
  )
}
