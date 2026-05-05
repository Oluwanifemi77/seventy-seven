import { useEffect, useState } from 'react'
import { useScrollReveal, useParallax } from './hooks/useScrollReveal.js'

import IntroCurtain from './components/IntroCurtain.jsx'
import AnnouncementBar from './components/AnnouncementBar.jsx'
import Nav from './components/Nav.jsx'
import MobileMenu from './components/MobileMenu.jsx'
import CartDrawer from './components/CartDrawer.jsx'
import Hero from './components/Hero.jsx'
import DropCard from './components/DropCard.jsx'
import Marquee from './components/Marquee.jsx'
import Products from './components/Products.jsx'
import Lookbook from './components/Lookbook.jsx'
import Manifesto from './components/Manifesto.jsx'
import Categories from './components/Categories.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'
import {
  TweaksPanel,
  TweakSection,
  TweakSlider,
  TweakColor,
  useTweaks,
} from './components/TweaksPanel.jsx'

// ─── Logo font options ──────────────────────────────────────────────────────
const FONT_OPTIONS = [
  { id: 'Cormorant Garamond', label: 'Cormorant', stack: "'Cormorant Garamond', serif", style: 'italic', weight: 600 },
  { id: 'Playfair Display', label: 'Playfair', stack: "'Playfair Display', serif", style: 'italic', weight: 700 },
  { id: 'Allura', label: 'Allura', stack: "'Allura', cursive", style: 'normal', weight: 400 },
  { id: 'Pinyon Script', label: 'Pinyon', stack: "'Pinyon Script', cursive", style: 'normal', weight: 400 },
  { id: 'Italianno', label: 'Italianno', stack: "'Italianno', cursive", style: 'normal', weight: 400 },
  { id: 'Great Vibes', label: 'Great Vibes', stack: "'Great Vibes', cursive", style: 'normal', weight: 400 },
  { id: 'Tangerine', label: 'Tangerine', stack: "'Tangerine', cursive", style: 'normal', weight: 700 },
  { id: 'Dancing Script', label: 'Dancing', stack: "'Dancing Script', cursive", style: 'normal', weight: 700 },
]

const TWEAK_DEFAULTS = {
  logoFont: 'Pinyon Script',
  logoStyle: 'normal',
  logoWeight: 400,
  logoTrack: 0,
  accentColor: '#A4744F',
}

function applyLogoFont(t) {
  const opt = FONT_OPTIONS.find((o) => o.id === t.logoFont) || FONT_OPTIONS[0]
  const root = document.documentElement.style
  root.setProperty('--logo-font', opt.stack)
  root.setProperty('--logo-style', opt.style)
  root.setProperty('--logo-weight', String(opt.weight))
  root.setProperty('--logo-track', (t.logoTrack || 0) + 'em')
  root.setProperty('--cognac-hi', t.accentColor)
}

applyLogoFont(TWEAK_DEFAULTS)

// ─── App ────────────────────────────────────────────────────────────────────
export default function App() {
  // ── Cart state ─────────────────────────────────────────────────
  // cartItems: [{ id, name, price, ph, category, qty }, ...]
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0)

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const updateQty = (id, qty) => {
    if (qty < 1) {
      setCartItems((prev) => prev.filter((i) => i.id !== id))
    } else {
      setCartItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, qty } : i))
      )
    }
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id))
  }

  // ── Menu state ────────────────────────────────────────────────
  const [menuOpen, setMenuOpen] = useState(false)

  // ── Tweaks ───────────────────────────────────────────────────
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS)

  // ── Hooks ────────────────────────────────────────────────────
  useScrollReveal()
  useParallax()

  useEffect(() => { applyLogoFont(t) }, [t.logoFont, t.logoTrack, t.accentColor])

  // Sync body class with mobile menu state
  useEffect(() => {
    if (menuOpen) document.body.classList.add('menu-open')
    else document.body.classList.remove('menu-open')
  }, [menuOpen])

  return (
    <>
      <IntroCurtain />

      {/* Fixed announcement bar — always at very top */}
      <AnnouncementBar />

      {/* Fixed nav — sits below announce bar, moves to top on scroll */}
      <Nav
        cartCount={cartCount}
        menuOpen={menuOpen}
        onMenuToggle={setMenuOpen}
        onCartOpen={() => setCartOpen(true)}
      />

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Cart drawer */}
      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onQtyChange={updateQty}
        onRemove={removeFromCart}
      />

      <main id="top">
        <Hero />
        <DropCard />
        <Marquee />
        <Products onAddToCart={addToCart} />
        <Lookbook />
        <Manifesto />
        <Categories />
        <Newsletter />
      </main>

      <Footer />

      {/* Tweaks panel */}
      <TweaksPanel title="Tweaks — 77">
        <TweakSection label="77 Logotype" />
        <div className="twk-row">
          <div className="twk-lbl"><span>Font family</span></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {FONT_OPTIONS.map((o) => (
              <button
                key={o.id}
                onClick={() => setTweak({ logoFont: o.id, logoStyle: o.style, logoWeight: o.weight })}
                style={{
                  appearance: 'none',
                  border: t.logoFont === o.id ? '1px solid #29261b' : '.5px solid rgba(0,0,0,.12)',
                  borderRadius: '8px',
                  background: t.logoFont === o.id ? 'rgba(255,255,255,.95)' : 'rgba(255,255,255,.5)',
                  padding: '10px 6px 6px',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  outline: t.logoFont === o.id ? '2px solid rgba(164,116,79,.35)' : 'none',
                  outlineOffset: '-2px',
                }}
              >
                <span style={{
                  fontFamily: o.stack,
                  fontStyle: o.style,
                  fontWeight: o.weight,
                  fontSize: ['Tangerine', 'Allura', 'Italianno', 'Great Vibes', 'Pinyon Script'].includes(o.id) ? '34px' : '24px',
                  lineHeight: 0.9,
                  color: '#29261b',
                }}>77</span>
                <span style={{ fontSize: '9px', letterSpacing: '.08em', textTransform: 'uppercase', color: 'rgba(41,38,27,.55)' }}>
                  {o.label}
                </span>
              </button>
            ))}
          </div>
        </div>
        <TweakSlider
          label="Letter spacing"
          value={Number(t.logoTrack).toFixed(2)}
          min={-0.1}
          max={0.2}
          step={0.01}
          unit="em"
          onChange={(v) => setTweak('logoTrack', v)}
        />
        <TweakSection label="Accent" />
        <TweakColor
          label="Second 7"
          value={t.accentColor}
          onChange={(v) => setTweak('accentColor', v)}
        />
      </TweaksPanel>
    </>
  )
}
