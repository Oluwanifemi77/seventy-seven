import { useEffect, useRef, useState } from 'react'

function scrollTo(id) {
  if (id === '#top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
  const el = document.querySelector(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 8, behavior: 'smooth' })
}

export default function Nav({ cartCount, menuOpen, onMenuToggle, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const badgeRef = useRef(null)
  const prevCount = useRef(cartCount)

  useEffect(() => {
    // Scroll past the 32px announce bar → nav slides to top and gets glass bg
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bump animation on cart count change
  useEffect(() => {
    if (cartCount !== prevCount.current && badgeRef.current) {
      badgeRef.current.classList.remove('bump')
      void badgeRef.current.offsetWidth
      badgeRef.current.classList.add('bump')
    }
    prevCount.current = cartCount
  }, [cartCount])

  const handleLink = (e, href) => {
    e.preventDefault()
    if (menuOpen) onMenuToggle(false)
    scrollTo(href)
  }

  return (
    <nav
      className={`nav${scrolled ? ' scrolled' : ''}`}
      id="nav"
      aria-label="Primary"
    >
      <a
        href="#top"
        className="nav__brand"
        aria-label="77 Seventy Seven — home"
        onClick={(e) => handleLink(e, '#top')}
      >
        <span className="logo">
          <span className="logo__num">
            <span className="seven">7</span>
            <span className="seven">7</span>
          </span>
          <span className="logo__label">Seventy Seven</span>
        </span>
      </a>

      <div className="nav__links" role="navigation">
        {[
          ['#top', 'Home'],
          ['#shop', 'Shop'],
          ['#lookbook', 'Lookbook'],
          ['#about', 'About'],
          ['#contact', 'Contact'],
        ].map(([href, label]) => (
          <a key={href} href={href} onClick={(e) => handleLink(e, href)}>
            {label}
          </a>
        ))}
      </div>

      <div className="nav__right">
        {/* Cart button — opens cart drawer */}
        <button
          className="nav__cart"
          aria-label={`Cart — ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
          onClick={onCartOpen}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square">
            <path d="M4 7h16l-1.5 11a2 2 0 0 1-2 1.7H7.5a2 2 0 0 1-2-1.7L4 7Z" />
            <path d="M9 7V5a3 3 0 0 1 6 0v2" />
          </svg>
          <span
            ref={badgeRef}
            className={`nav__cart-badge${cartCount > 0 ? ' show' : ''}`}
            aria-live="polite"
          >
            {cartCount >= 99 ? '99+' : String(cartCount)}
          </span>
        </button>

        {/* Mobile hamburger */}
        <button
          className="nav__menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={() => onMenuToggle(!menuOpen)}
        >
          <span />
        </button>
      </div>
    </nav>
  )
}
