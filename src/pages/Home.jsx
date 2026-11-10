import { motion } from 'framer-motion'
import Logo from '../components/Logo.jsx'
import StudioImage from '../components/StudioImage.jsx'
import { scenes } from '../data/studio.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.1 },
  }),
}

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ───────────────── HERO — dark editorial ───────────────── */}
      <section className="relative isolate flex min-h-screen flex-col justify-end overflow-hidden bg-coal pb-16 pt-32 text-cream sm:pb-24">
        <div className="warm-halo drift" />
        <div className="grain absolute inset-0" />

        <div className="relative mx-auto flex w-full max-w-7xl flex-col px-[var(--gutter)]">
          {/* Eyebrow */}
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="text-[10px] uppercase tracking-editorial text-cream/60"
          >
            ◇  Studio d'enregistrement · Paris · XV
          </motion.span>

          {/* Big logo */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-8 w-full text-cream"
          >
            <Logo className="h-auto w-full" />
          </motion.div>

          {/* Tagline + meta — magazine-style two-column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-12 grid gap-8 border-t border-cream/15 pt-8 md:grid-cols-12"
          >
            <h1 className="md:col-span-10 md:col-start-2 text-center text-2xl font-medium leading-snug text-balance text-cream/90 sm:text-3xl" style={{ fontFamily: 'Platypi, Georgia, serif' }}>
              Audioscope, niché dans le 15e arrondissement de Paris, est un lieu dédié à la captation sonore haut de gamme. Le studio revendique une approche artisanale du son, où chaque projet trouve sa texture grâce à un équilibre entre analogique et numérique.
            </h1>
          </motion.div>
        </div>

        {/* Bottom bar — index lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="relative mx-auto mt-16 flex w-full max-w-7xl items-center justify-between px-[var(--gutter)] pb-2 text-[10px] uppercase tracking-editorial text-cream/45"
        >
        </motion.div>
      </section>

      {/* Soft fade from the dark hero into the sand gallery */}
      <div aria-hidden="true" className="h-24 bg-gradient-to-b from-coal to-sand sm:h-32" />

      {/* ───────────────── STUDIO TOUR ───────────────── */}
      <section id="studio" className="relative scroll-mt-24 bg-sand pb-28 pt-8 text-coal sm:pb-36 sm:pt-12">
        <div className="mx-auto max-w-7xl px-[var(--gutter)]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 grid gap-6 md:grid-cols-12 md:items-end"
          >
            <div className="md:col-span-7">
              <h2 className="mt-4 text-display-md font-bold text-balance text-coal">
                Audioscope
                <br/>
                <em className="italic font-medium text-clay">Studio analogique.</em>
              </h2>
            </div>
          </motion.div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-6 sm:auto-rows-[clamp(7rem,10vw,8.5rem)] sm:gap-6">
            {scenes.map((scene, i) => (
              <ImageTile key={scene.id} scene={scene} index={i} />
            ))}
          </ul>
        </div>
      </section>

    </motion.div>
  )
}

function ImageTile({ scene, index }) {
  // Desktop: every grid cell is deliberately occupied — no empty blocks.
  const span = {
    1: 'sm:col-span-4 sm:row-span-3',
    2: 'sm:col-span-2 sm:row-span-2',
    3: 'sm:col-span-2 sm:row-span-2',
    4: 'sm:col-span-4 sm:row-span-2',
    5: 'sm:col-span-2 sm:row-span-2',
    6: 'sm:col-span-2 sm:row-span-2',
    7: 'sm:col-span-2 sm:row-span-3',
  }
  const aspect = {
    wide: 'aspect-[16/10]',
    tall: 'aspect-[3/4]',
    square: 'aspect-square',
  }[scene.layout]

  return (
    <motion.li
      initial={{ opacity: 0, y: 36, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      className={`group relative overflow-hidden bg-coffee ${span[scene.id]} ${aspect} sm:aspect-auto`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full"
      >
        <StudioImage scene={scene} className="h-full w-full" />
      </motion.div>

      {/* Persistent index tag (top-left) */}
      <span className="pointer-events-none absolute left-4 top-4 text-[10px] uppercase tracking-editorial text-cream/85">
        0{scene.id}
      </span>

      {/* Caption — slides up on hover */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-coal/90 via-coal/40 to-transparent px-5 pb-4 pt-12 opacity-0 transition-all duration-500 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
        <span className="block text-[10px] uppercase tracking-editorial text-cream/70">
          {scene.caption}
        </span>
        <span className="mt-1 block text-2xl font-bold tracking-tight2 text-cream">
          {scene.title}
        </span>
      </div>
    </motion.li>
  )
}
