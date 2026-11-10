import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'

// Gear is kept in the codebase but not exposed while it is on standby.
const menuItems = [
  { to: '/',         label: 'Le studio' },
  { to: '/infos',    label: 'Informations' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while menu open
  useEffect(() => {
    document.documentElement.classList.toggle('scroll-lock', open)
    return () => document.documentElement.classList.remove('scroll-lock')
  }, [open])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <motion.header
        // Pure opacity fade — no translation, so the bar appears in place.
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-40 text-cream transition-[background,backdrop-filter,border-color] duration-500 ease-smooth ${
          scrolled ? 'bg-coal/90 backdrop-blur-md border-b border-cream/10' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:h-20 sm:px-10">
          {/* Logo — left, in flex flow */}
          <Link
            to="/"
            aria-label="AudioScope — Accueil"
            className="text-current"
          >
            <Logo className="h-6 w-auto sm:h-7" />
          </Link>

          {/* Burger — right */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-pressed={open}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-editorial text-current opacity-85 hover:opacity-100"
          >
            <span className="relative inline-flex h-7 w-7 items-center justify-center">
              <motion.span
                className="absolute h-[1.5px] w-5 bg-current"
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.span
                className="absolute h-[1.5px] w-5 bg-current"
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
            <span className="relative h-3 overflow-hidden">
              <motion.span
                className="block"
                animate={open ? { y: '-100%' } : { y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                Menu
              </motion.span>
              <motion.span
                className="absolute inset-x-0 top-full block"
                animate={open ? { y: '-100%' } : { y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                Fermer
              </motion.span>
            </span>
          </button>
        </div>
      </motion.header>

      <FullScreenMenu open={open} onClose={() => setOpen(false)} items={menuItems} />
    </>
  )
}

function FullScreenMenu({ open, onClose, items }) {
  const { pathname } = useLocation()
  const isActiveLink = (item) =>
    item.to === '/' ? pathname === '/' : pathname === item.to

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-30 text-coal"
          aria-label="Menu principal"
          role="dialog"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-coal/85"
          />
          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-y-0 right-0 flex w-full max-w-3xl flex-col overflow-y-auto bg-cream"
          >
            <div className="grain absolute inset-0 pointer-events-none" />
            <div className="relative flex flex-1 flex-col px-8 pb-16 pt-32 sm:px-14">
              <nav className="mb-16 flex-1">
                <ul className="space-y-2 sm:space-y-4">
                  {items.map((l, i) => {
                    const active = isActiveLink(l)
                    return (
                      <motion.li
                        key={l.to}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <NavLink to={l.to} end={l.to === '/'} className="group block py-2 text-coal">
                          <span
                            className="text-fill text-display-md font-bold"
                            style={{ '--fill': '#a87a4f' }}
                            data-active={active ? 'true' : undefined}
                          >
                            <span className="text-fill__text">{l.label}</span>
                            <span className="text-fill__filler" aria-hidden="true">
                              <span className="text-fill__text">{l.label}</span>
                            </span>
                          </span>
                        </NavLink>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
