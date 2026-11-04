import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-coffee/10 bg-coal">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center sm:px-10">
        <div className="text-xs uppercase tracking-editorial text-cream/60">
          © 2026 AudioScope
        </div>
        <ul className="flex items-center gap-6 text-xs uppercase tracking-editorial text-cream/60">
          <li><Link to="/" className="transition hover:text-cream">Le Studio</Link></li>
          <li><Link to="/infos" className="transition hover:text-cream">Informations</Link></li>
        </ul>
      </div>
    </footer>
  )
}
