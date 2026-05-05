import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function MobileMenu({ open, onClose }) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && open) onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const links = [
    ['/', 'Home'],
    ['/shop', 'Shop'],
    ['/lookbook', 'Lookbook'],
    ['/about', 'Story'],
    ['/contact', 'Contact'],
  ]

  return (
    <div className="mobile-menu" id="mobileMenu" aria-hidden={!open}>
      <ul className="mobile-menu__list">
        {links.map(([to, label]) => (
          <li key={to}>
            <Link to={to} onClick={onClose}>{label}</Link>
          </li>
        ))}
      </ul>
      <div className="mobile-menu__foot">
        <span>77 — Seventy Seven</span>
        <span>SS &apos;26</span>
      </div>
    </div>
  )
}
