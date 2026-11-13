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
      className="relative isolate overflow-hidden bg-coal"
    >
      {/* One continuous warm background behind the whole page */}
      <div className="warm-halo drift" />
      <div className="grain absolute inset-0" />
      {/* ───────────────── HEADER (dark editorial) — Contact & Adresse ───────────────── */}
      <section className="relative pb-20 pt-32 text-cream sm:pb-28 sm:pt-40">

        <div className="relative mx-auto max-w-7xl px-[var(--gutter)]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="grid gap-16 md:grid-cols-2"
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
      <section id="gear" className="relative py-24 text-cream sm:py-32">
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-[var(--gutter)] md:grid-cols-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <h2 className="text-display-md font-bold text-balance">
              Fiche technique du studio <br/>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70">
              Microphones, préamplis, outboard et backline la collection complète,
              marque par marque.
            </p>
            <a
              href="/fichetech.pdf"
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-editorial text-cream/60 hover:text-cream"
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
