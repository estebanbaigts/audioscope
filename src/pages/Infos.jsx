import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TextFill from '../components/TextFill.jsx'
import TiltCard from '../components/TiltCard.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.1 },
  }),
}

export default function Infos() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ───────────────── HEADER (dark editorial) — Contact & Adresse ───────────────── */}
      <section className="relative isolate overflow-hidden bg-coal pb-20 pt-32 text-cream sm:pb-28 sm:pt-40">
        <div className="warm-halo drift" />
        <div className="grain absolute inset-0" />

        <div className="relative mx-auto max-w-7xl px-[var(--gutter)]">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="text-[10px] uppercase tracking-editorial text-cream/60"
          >
            ◇ §03 — Informations
          </motion.span>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-10 grid gap-16 md:grid-cols-2"
          >
            {/* Contact */}
            <div>
              <span className="text-[10px] uppercase tracking-editorial text-cream/55"></span>
              <h2 className="mt-4 text-display-sm font-bold text-balance">
                Contact<br/>
              </h2>

              <ul className="mt-10 space-y-6 text-cream">
                <ContactRow label="Email">
                  <a
                    href="mailto:contact@audioscope.studio"
                    className="group inline-block text-cream hover:text-cream/75"
                  >
                    contact@audioscope.studio
                  </a>
                </ContactRow>
                <ContactRow label="Téléphone">
                  <a
                    href="tel:+33000000000"
                    className="group inline-block text-cream hover:text-cream/75"
                  >
                    +33 (0)6 27 77 60 43
                  </a>
                </ContactRow>
                <ContactRow label="Instagram">
                  <span className="text-cream/70">@guillaume.audioscope</span>
                </ContactRow>
              </ul>
            </div>

            {/* Adresse */}
            <div>
              <span className="text-[10px] uppercase tracking-editorial text-cream/55"></span>
              <h2 className="mt-4 text-display-sm font-bold text-balance">
                Adresse<br/>
              </h2>

              <address className="not-italic mt-10 space-y-1 text-lg leading-relaxed text-cream">
                <span className="block">Audioscope Studio</span>
                <span className="block">85 rue Lecourbe</span>
                <span className="block">75015 Paris · France</span>
              </address>

              <p className="mt-4 text-sm leading-relaxed text-cream/65">
                Métro · L6 · L8 · L12<br />
              </p>

              {/* Stylised "map" placeholder — clickable link to Google Maps */}
              <a
                href="https://www.google.com/maps/place/85+Rue+Lecourbe,+75015+Paris/@48.8429195,2.3019618,17z/data=!3m1!4b1!4m6!3m5!1s0x47e6703bf3e74133:0x216967140a55364b!8m2!3d48.842916!4d2.3045367!16s%2Fg%2F11cnchvdmv?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="relative mt-10 block aspect-[4/3] overflow-hidden border border-cream/15 bg-warm hover:opacity-90 transition-opacity"
              >
                <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
                  <rect width="400" height="300" fill="#e8dcc6"/>
                  <g stroke="#a87a4f" strokeWidth="1.2" opacity="0.5">
                    <line x1="0" y1="80" x2="400" y2="80"/>
                    <line x1="0" y1="170" x2="400" y2="170"/>
                    <line x1="0" y1="240" x2="400" y2="240"/>
                    <line x1="100" y1="0" x2="100" y2="300"/>
                    <line x1="220" y1="0" x2="220" y2="300"/>
                    <line x1="320" y1="0" x2="320" y2="300"/>
                  </g>
                  <g stroke="#6b4226" strokeWidth="2.4" opacity="0.7" fill="none">
                    <path d="M -10 130 L 130 130 L 130 200 L 410 200" />
                    <path d="M 200 -10 L 200 100 L 280 100 L 280 310" />
                  </g>
                  <g transform="translate(200, 150)">
                    <circle r="38" fill="#3d2818" opacity="0.12"/>
                    <circle r="22" fill="#3d2818" opacity="0.18"/>
                    <path d="M 0 -16 a 12 12 0 1 1 0 0.01 z M 0 -4 L -7 12 L 7 12 Z" fill="#1a1410"/>
                    <circle cx="0" cy="-16" r="5" fill="#f4ece0"/>
                  </g>
                </svg>
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-editorial text-coffee/70 backdrop-blur">
                  AudioScope · 75015 Paris
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────────── CONTACT + ADRESSE (hidden — moved to header) ───────────────── */}
      <section id="contact" className="relative hidden bg-cream py-24 text-coal sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-[var(--gutter)] lg:grid-cols-12 lg:gap-20">
          <ContactBlock />
          <AddressBlock />
        </div>
      </section>

      {/* ───────────────── PDF GEAR CARD ───────────────── */}
      <section id="gear" className="relative isolate overflow-hidden bg-sand py-24 text-coal sm:py-32">
        <div className="grain absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-[var(--gutter)] md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <span className="text-[10px] uppercase tracking-editorial text-coffee/55">
              §03 — Fiche technique
            </span>
            <h2 className="mt-4 text-display-md font-bold text-balance">
              Fiche technique du studio <br/>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-coffee/75">
              Microphones, préamplis, outboard et backline — la collection complète,
              marque par marque.
            </p>
            <a
              href="/fichetech.pdf"
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-editorial text-coffee/60 hover:text-coal"
            >
              Version PDF imprimable
              <span className="transition group-hover:translate-y-0.5">↓</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="md:col-span-5"
          >
            <GearLinkCard />
          </motion.div>
        </div>
      </section>

      {/* ───────────────── GEAR INDEX (editorial table) ───────────────── */}
      <section className="relative bg-coal py-24 text-cream sm:py-32 hidden">
        <div className="mx-auto max-w-7xl px-[var(--gutter)]">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="block text-[10px] uppercase tracking-editorial text-cream/55"
          >
            §03 — Aperçu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85 }}
            className="mt-5 text-display-md font-bold text-balance"
          >
            Lorem ipsum<br/>
            <em className="italic font-medium text-warm">dolor consectetur.</em>
          </motion.h2>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
            className="mt-14 divide-y divide-cream/10 border-y border-cream/15"
          >
            {[
              ['01', 'Console', 'Lorem ipsum 24 voies · sed do eiusmod tempor incididunt'],
              ['02', 'Bandes', 'Studer A80 · 1/2", lorem ipsum dolor sit amet'],
              ['03', 'Synthés', 'Consectetur adipiscing · OB-6, Juno-60, Prophet-5'],
              ['04', 'Micros', 'U87 · C414 · SM7B · Royer R-121 · ut enim ad minim'],
              ['05', 'Préamps', 'Neve 1073 · API 512c · UA 610 · veniam quis nostrud'],
              ['06', 'Live room', '45 m² · acoustique traitée · sed do eiusmod tempor'],
            ].map(([n, name, detail]) => (
              <motion.li
                key={n}
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } }}
                className="group"
              >
                <div className="grid grid-cols-12 items-baseline gap-4 py-6 sm:py-7">
                  <span className="col-span-2 text-[11px] uppercase tracking-editorial text-cream/45 sm:col-span-1">
                    {n}
                  </span>
                  <span className="col-span-10 text-xl font-bold tracking-tight2 text-cream sm:col-span-3 sm:text-2xl">
                    {name}
                  </span>
                  <span className="col-span-12 text-sm text-cream/65 sm:col-span-8">
                    {detail}
                  </span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </motion.div>
  )
}

/* ──────────────────── Blocks ──────────────────── */

function ContactBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="lg:col-span-6"
    >
      <span className="text-[10px] uppercase tracking-editorial text-cream">§01 — Contact</span>
      <h2 className="mt-4 text-display-sm font-bold text-balance">
        Lorem ipsum<br/>
        <em className="italic font-medium text-cream">dolor amet.</em>
      </h2>

      <ul className="mt-10 space-y-6 text-cream">
        <ContactRow label="Email">
          <a
            href="mailto:contact@audioscope.studio"
            className="group inline-block"
          >
            <TextFill fill="#a87a4f" className="text-coal">contact@audioscope.studio</TextFill>
          </a>
        </ContactRow>
        <ContactRow label="Téléphone">
          <a
            href="tel:+33000000000"
            className="group inline-block"
          >
            <TextFill fill="#a87a4f" className="text-coal">+33 (0)0 00 00 00 00</TextFill>
          </a>
        </ContactRow>
        <ContactRow label="Booking">
          Lorem ipsum · réponse sous 48 h
        </ContactRow>
        <ContactRow label="Suivre">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {['Instagram', 'Bandcamp', 'SoundCloud', 'Vimeo'].map((s) => (
              <a key={s} href="#" className="group inline-block">
                <TextFill fill="#a87a4f" className="text-coal">{s}</TextFill>
              </a>
            ))}
          </div>
        </ContactRow>
      </ul>
    </motion.div>
  )
}

function AddressBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className="lg:col-span-6"
    >
      <span className="text-[10px] uppercase tracking-editorial text-coffee/55">§01 — Adresse</span>
      <h2 className="mt-4 text-display-sm font-bold text-balance">
        Lorem ipsum<br/>
        <em className="italic font-medium text-clay">in via.</em>
      </h2>

      <address className="not-italic mt-10 space-y-1 text-lg leading-relaxed text-coal">
        <span className="block">AudioScope Studio</span>
        <span className="block">Lorem ipsum 14, dolor sit</span>
        <span className="block">75011 Paris · France</span>
      </address>

      <p className="mt-4 text-sm leading-relaxed text-coffee/70">
        Métro Lorem ipsum · L3<br />
        Consectetur adipiscing elit pour matériel volumineux.
      </p>

      {/* Stylised "map" placeholder */}
      <div className="relative mt-10 aspect-[4/3] overflow-hidden border border-coal/15 bg-warm">
        <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
          <rect width="400" height="300" fill="#e8dcc6"/>
          <g stroke="#a87a4f" strokeWidth="1.2" opacity="0.5">
            <line x1="0" y1="80" x2="400" y2="80"/>
            <line x1="0" y1="170" x2="400" y2="170"/>
            <line x1="0" y1="240" x2="400" y2="240"/>
            <line x1="100" y1="0" x2="100" y2="300"/>
            <line x1="220" y1="0" x2="220" y2="300"/>
            <line x1="320" y1="0" x2="320" y2="300"/>
          </g>
          <g stroke="#6b4226" strokeWidth="2.4" opacity="0.7" fill="none">
            <path d="M -10 130 L 130 130 L 130 200 L 410 200" />
            <path d="M 200 -10 L 200 100 L 280 100 L 280 310" />
          </g>
          <g transform="translate(200, 150)">
            <circle r="38" fill="#3d2818" opacity="0.12"/>
            <circle r="22" fill="#3d2818" opacity="0.18"/>
            <path d="M 0 -16 a 12 12 0 1 1 0 0.01 z M 0 -4 L -7 12 L 7 12 Z" fill="#1a1410"/>
            <circle cx="0" cy="-16" r="5" fill="#f4ece0"/>
          </g>
        </svg>
        <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-editorial text-coffee/70 backdrop-blur">
          AudioScope · 75011 Paris
        </div>
      </div>

      <a
        href="https://www.google.com/maps"
        target="_blank"
        rel="noreferrer"
        className="group mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-editorial text-coffee/70 hover:text-coal"
      >
        <TextFill fill="#a87a4f" className="text-coffee/85">Ouvrir dans Maps</TextFill>
        <span>→</span>
      </a>
    </motion.div>
  )
}

function ContactRow({ label, children }) {
  return (
    <li className="border-t border-coal/15 pt-4">
      <span className="block text-[10px] uppercase tracking-editorial text-cream">{label}</span>
      <div className="mt-1.5 text-lg text-coal">{children}</div>
    </li>
  )
}

function GearLinkCard() {
  return (
    <TiltCard maxTilt={8}>
      <Link
        to="/materiel"
        className="group relative flex items-center gap-6 overflow-hidden rounded-2xl border border-coal/20 bg-cream p-6 transition-colors duration-500 ease-smooth hover:border-coal/50 sm:p-8"
      >
        {/* Mini rack — écho du hero de la page matériel */}
        <div className="relative h-24 w-20 flex-none" style={{ transform: 'translateZ(40px)' }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-x-0 h-6 rounded-sm border border-coal/20 bg-ink"
              style={{ top: i * 30, transform: `translateZ(${i * 12}px)` }}
            >
              <div className="flex h-full items-center gap-1.5 px-2">
                <span className="h-2.5 w-2.5 rounded-full bg-clay" />
                <span className="h-1.5 w-1.5 rounded-full bg-warm/70" />
                <span className="h-1.5 w-1.5 rounded-full bg-warm/40" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1" style={{ transform: 'translateZ(24px)' }}>
          <span className="block text-[10px] uppercase tracking-editorial text-coffee/55">
            Explorer
          </span>
          <span className="mt-1 block text-xl font-bold tracking-tight2 text-coal sm:text-2xl">
            Le matériel du studio
          </span>
          <span className="mt-1 block text-xs text-coffee/65">
            Micros · préamplis · outboard · backline
          </span>
        </div>

        <span className="text-2xl text-coffee/60 transition group-hover:translate-x-0.5 group-hover:text-coal">
          →
        </span>
      </Link>
    </TiltCard>
  )
}
