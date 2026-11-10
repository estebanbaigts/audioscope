import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { LogoMark } from './Logo.jsx'

/**
 * Editorial intro animation:
 *   1. Counter ticks from 000 → 100 (cubic ease-out, ~1.9s)
 *   2. Brief hold at 100
 *   3. Two panels slide vertically apart (top up, bottom down) revealing the site
 *
 * The big counter is rendered inside both panels and positioned across the seam
 * so each panel takes its own half — when they slide out, each half goes with
 * its panel for a "page tearing in two" effect.
 */
export default function LoadingScreen({ onDone }) {
  const [count, setCount] = useState(0)
  const [exit, setExit] = useState(false)

  // Tween count 0 → 100 with cubic ease-out, then split-exit
  useEffect(() => {
    let raf
    let holdT
    let doneT
    const start = performance.now()
    const duration = 1300
    const holdMs = 200
    const exitMs = 1100

    const tick = (t) => {
      const p = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        holdT = window.setTimeout(() => setExit(true), holdMs)
        doneT = window.setTimeout(() => onDone?.(), holdMs + exitMs + 80)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.clearTimeout(holdT)
      window.clearTimeout(doneT)
    }
  }, [onDone])

  // Lock body scroll while the intro is on screen
  useEffect(() => {
    document.documentElement.classList.add('scroll-lock')
    return () => document.documentElement.classList.remove('scroll-lock')
  }, [])

  const display = String(count).padStart(3, '0')
  const slideOut = { duration: 1.1, ease: [0.76, 0, 0.24, 1] }

  return (
    <div
      className="fixed inset-0 z-[60]"
      aria-label="AudioScope — chargement"
      role="status"
    >
      {/* ─────────── TOP PANEL ─────────── */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: exit ? '-100%' : 0 }}
        transition={slideOut}
        className="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-coal text-cream"
      >
        <div className="warm-halo drift" />
        <div className="grain absolute inset-0" />

        {/* Top-left + top-right meta */}
        <div className="relative flex items-start justify-between px-[var(--gutter)] pt-8 text-[10px] uppercase tracking-editorial text-cream/55 font-medium tabular-numerals">
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ◇ Audioscope Studio
          </motion.span>
        </div>

        {/* Centered logo mark — vinyl record */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -90 }}
          animate={{
            opacity: exit ? 0 : 1,
            scale: 1,
            rotate: count * 3.6, // spins along with the counter
          }}
          transition={{
            opacity: { duration: 0.6 },
            scale: { duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: 0.1, ease: 'linear' },
          }}
          className="absolute left-1/2 top-[28%] -translate-x-1/2 text-cream"
        >
          <LogoMark className="h-14 w-14 sm:h-16 sm:w-16" />
        </motion.div>

        {/* Counter — top half (sits across the seam) */}
        <CounterHalf display={display} half="top" />

        {/* Hairline cut line at the seam — drawn before exit, fades out */}
        <motion.span
          aria-hidden
          className="absolute inset-x-[var(--gutter)] bottom-0 h-px origin-left bg-cream/40"
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: exit ? 1 : count / 100,
            opacity: exit ? 0 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      {/* ─────────── BOTTOM PANEL ─────────── */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: exit ? '100%' : 0 }}
        transition={slideOut}
        className="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-coal text-cream"
      >
        <div className="warm-halo drift" />
        <div className="grain absolute inset-0" />

        {/* Counter — bottom half */}
        <CounterHalf display={display} half="bottom" />

        {/* "Now loading" tag right under the counter */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: exit ? 0 : 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute inset-x-0 top-[58%] text-center text-[10px] uppercase tracking-editorial text-cream/55"
        >
          Studio analogique · Now loading
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: exit ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute inset-x-[var(--gutter)] bottom-20"
        >
          <div className="relative h-px w-full bg-cream/15">
            <div
              className="absolute inset-y-0 left-0 bg-cream transition-[width] duration-100 ease-linear"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>

        {/* Bottom meta */}
        <div className="absolute inset-x-[var(--gutter)] bottom-8 flex items-end justify-between text-[10px] uppercase tracking-editorial text-cream/55 font-medium tabular-numerals">
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ◇  Studio d'enregistrement · Paris · XV
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {String(count).padStart(3, '0')} / 100
          </motion.span>
        </div>
      </motion.div>
    </div>
  )
}

function CounterHalf({ display, half }) {
  // Counter is rendered inside each panel and positioned across the seam.
  // overflow-hidden on the parent panels naturally clips the wrong half.
  const positioning =
    half === 'top'
      ? 'absolute inset-x-0 bottom-0 translate-y-1/2'
      : 'absolute inset-x-0 top-0 -translate-y-1/2'

  return (
    <div className={`${positioning} flex items-center justify-center`}>
      <span
        className="select-none font-bold leading-[0.85] tracking-tight2 text-[clamp(7rem,26vw,20rem)]"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {display}
      </span>
    </div>
  )
}
