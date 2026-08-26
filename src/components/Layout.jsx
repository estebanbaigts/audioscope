import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])

  return (
    // Use the dark editorial background and light text so the header (text-cream)
    // remains visible. The previous `bg-cream text-charcoal` made the nav's
    // light text invisible on the light background.
    <div className="flex min-h-screen flex-col bg-coal text-cream">
      <Nav />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <Outlet key={pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
