import { motion } from 'framer-motion'
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
            <ContactProfiles />

            {/* Contact */}
            {/* <div>
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
                    href="tel:+33627776043"
                    className="group inline-block text-cream hover:text-cream/75"
                  >
                    +33 (0)6 27 77 60 43
                  </a>
                </ContactRow>
                <ContactRow label="Instagram">
                  <span className="text-cream/70">@guillaume.audioscope</span>
                </ContactRow>
              </ul>
            </div> */}

            <div className="border-t border-cream/20 pt-8 md:col-span-2 md:pt-10">
              <div className="grid gap-8 md:grid-cols-12 md:items-center md:gap-10">
                <div className="md:col-span-4">
                  <span className="text-[10px] uppercase tracking-editorial text-cream/55">
                    ◇ Nous trouver
                  </span>
                  <h2 className="mt-4 text-display-sm font-bold text-balance">
                    Au cœur du 15<sup>e</sup>
                  </h2>
                  <address className="mt-6 not-italic text-base leading-relaxed text-cream/75">
                    <span className="block font-medium text-cream">Audioscope Studio</span>
                    <span className="block">85 rue Lecourbe</span>
                    <span className="block">75015 Paris · France</span>
                  </address>

                  <div className="mt-6 border-t border-cream/15 pt-5">
                    <span className="text-[10px] uppercase tracking-editorial text-cream/45">
                      Accès métro
                    </span>
                    <div className="mt-3 flex gap-2" aria-label="Lignes de métro 6, 8 et 12">
                      {['6', '8', '12'].map((line) => (
                        <span
                          key={line}
                          className="flex h-8 min-w-8 items-center justify-center border border-cream/25 px-2 text-xs font-medium text-cream"
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="https://www.google.com/maps/place/85+Rue+Lecourbe,+75015+Paris/@48.8429195,2.3019618,17z/data=!3m1!4b1!4m6!3m5!1s0x47e6703bf3e74133:0x216967140a55364b!8m2!3d48.842916!4d2.3045367!16s%2Fg%2F11cnchvdmv?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-7 inline-flex items-center gap-3 border-b border-cream/40 pb-2 text-[10px] uppercase tracking-editorial text-cream transition-colors hover:border-cream hover:text-cream/70"
                  >
                    Ouvrir l’itinéraire
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
                  </a>
                </div>

                <a
                  href="https://www.google.com/maps/place/85+Rue+Lecourbe,+75015+Paris/@48.8429195,2.3019618,17z/data=!3m1!4b1!4m6!3m5!1s0x47e6703bf3e74133:0x216967140a55364b!8m2!3d48.842916!4d2.3045367!16s%2Fg%2F11cnchvdmv?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Voir l’emplacement d’Audioscope Studio sur Google Maps"
                  className="group relative block aspect-[4/3] overflow-hidden bg-sand transition-opacity hover:opacity-90 md:col-span-8"
                >
                  <svg
                    viewBox="0 0 800 520"
                    preserveAspectRatio="xMidYMid slice"
                    role="img"
                    aria-label="Plan illustré du quartier autour du studio"
                    className="h-full w-full"
                  >
                    <rect width="800" height="520" fill="#e8dcc6" />
                    <g fill="#d7c6aa" opacity="0.72">
                      <path d="M0 0h210v120H0zM250 0h170v120H250zM500 0h300v120H500zM0 180h210v120H0zM250 180h170v120H250zM500 180h300v120H500zM0 360h210v160H0zM250 360h170v160H250zM500 360h300v160H500z" />
                    </g>
                    <g fill="none" stroke="#f4ece0" strokeWidth="28">
                      <path d="M0 150h800M0 330h800M230 0v520M460 0v520" />
                    </g>
                    <path
                      d="M0 150h800"
                      fill="none"
                      stroke="#a87a4f"
                      strokeWidth="7"
                      strokeDasharray="12 12"
                      opacity="0.75"
                    />
                    <g transform="translate(505 258)">
                      <circle r="54" fill="#3d2818" opacity="0.12" />
                      <circle r="34" fill="#3d2818" opacity="0.18" />
                      <path d="M0-27a20 20 0 1 1 0 40L0 43-12 13a20 20 0 0 1 12-40Z" fill="#1a1410" />
                      <circle cy="-7" r="7" fill="#f4ece0" />
                    </g>
                    <g fill="#6b4226" fontFamily="Helvetica, Arial, sans-serif" fontSize="13" letterSpacing="2">
                      <text x="44" y="139">RUE LECOURBE</text>
                      <text x="544" y="244">AUDIOSCOPE</text>
                      <text x="545" y="267">STUDIO · PARIS 15</text>
                    </g>
                  </svg>
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-cream px-4 py-3 text-[10px] uppercase tracking-editorial text-coal transition-colors group-hover:bg-white">
                    85 rue Lecourbe
                    <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </div>
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
              Microphones, préamplis, outboard et backline la collection complète,
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
            <GearPdfCard />
          </motion.div>
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
    </motion.div>
  )
}

function ContactProfiles() {
  const profiles = [
    {
      name: 'Guillaume André',
      description: 'Ingénieur du son, fondateur du studio Audioscope · prises de son et réalisation',
      contacts: [
        { label: 'Email', value: 'guillaume.audioscope@gmail.com', href: 'mailto:guillaume.audioscope@gmail.com' },
        { label: 'Téléphone', value: '06 27 77 60 43', href: 'tel:+33627776043' },
        { label: 'Instagram', value: '@guillaume.audioscope' },
      ],
    },
    {
      name: 'Artus Galud',
      description: 'Ingénieur du son · prises de son et mixage',
      contacts: [
        { label: 'Email', value: 'artus@galud.com', href: 'mailto:artus@galud.com' },
        { label: 'Téléphone', value: '06 43 43 96 42', href: 'tel:+33643439642' },
        { label: 'Instagram', value: '@artus_gld' },
      ],
    },
  ]

  return (
    <section className="md:col-span-2">
      <img
        src="/images/studio.jpg"
        alt="Vue du studio Audioscope"
        className="mb-10 aspect-[16/7] w-full object-cover"
      />
      <h2 className="text-display-sm font-bold text-balance">
        Contacts
      </h2>
      <div className="mt-8 grid border-t border-cream/20 md:grid-cols-2">
        {profiles.map((profile) => (
          <article
            key={profile.name}
            className="border-b border-cream/20 py-8 md:px-8 md:first:pl-0 md:last:border-l md:last:pl-8"
          >
            <h3 className="text-3xl font-bold tracking-tight2 text-cream">
              {profile.name}
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/60">
              {profile.description}
            </p>
            {profile.contacts.length ? (
              <dl className="mt-8 space-y-5">
                {profile.contacts.map((contact) => (
                  <div key={contact.label}>
                    <dt className="text-[10px] uppercase tracking-editorial text-cream/50">{contact.label}</dt>
                    <dd className="mt-1 text-base text-cream">
                      {contact.href ? (
                        <a href={contact.href} className="hover:text-cream/75">{contact.value}</a>
                      ) : contact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-8 text-sm text-cream/55">Coordonnées à venir.</p>
            )}
          </article>
        ))}
      </div>
    </section>
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

function GearPdfCard() {
  return (
    <TiltCard maxTilt={8}>
      <a
        href="/fichetech.pdf"
        target="_blank"
        rel="noreferrer"
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
            Consulter
          </span>
          <span className="mt-1 block text-xl font-bold tracking-tight2 text-coal sm:text-2xl">
            La fiche technique
          </span>
          <span className="mt-1 block text-xs text-coffee/65">
            Micros · préamplis · outboard · backline
          </span>
        </div>

        <span className="text-2xl text-coffee/60 transition group-hover:translate-x-0.5 group-hover:text-coal">
          →
        </span>
      </a>
    </TiltCard>
  )
}
