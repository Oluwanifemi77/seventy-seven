import { useEffect } from 'react'

function scrollTo(id) {
  const el = document.querySelector(id)
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 8
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

export default function MobileMenu({ open, onClose }) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && open) onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const handleLink = (e, href) => {
    e.preventDefault()
    onClose()
    setTimeout(() => scrollTo(href), 50)
  }

  return (
    <div className="mobile-menu" id="mobileMenu" aria-hidden={!open}>
      <ul className="mobile-menu__list">
        {[['#top', 'Home'], ['#shop', 'Shop'], ['#drop', 'The Drop'], ['#lookbook', 'Lookbook'], ['#about', 'Story']].map(([href, label]) => (
          <li key={href}>
            <a href={href} onClick={(e) => handleLink(e, href)}>{label}</a>
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
