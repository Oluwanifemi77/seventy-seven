import { useRef, useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const faqs = [
  { q: 'How are pieces numbered?', a: 'Each piece in a drop is hand-stamped with its edition number (e.g. 012 / 077) before it ships. Your number is assigned at the time of order.' },
  { q: 'Do you restock sold-out pieces?', a: 'Never. Each drop is a closed series. Once the seventy-seven are gone, that edition is complete. We open a new series, not a restock.' },
  { q: 'What is the lead time?', a: 'Fourteen days from order to dispatch. We don\'t hold pre-made inventory — every piece is finished to order in the Lisbon studio.' },
  { q: 'Where do you ship?', a: 'Worldwide. Shipping is calculated at checkout. Orders over $250 ship free to most destinations.' },
]

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      <div className="faq-a" aria-hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  )
}

export default function Contact() {
  useScrollReveal()
  const [email, setEmail] = useState('')
  const [hint, setHint] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (submitted) return
    const trimmed = email.trim()
    const shake = () => formRef.current?.animate(
      [{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }],
      { duration: 260 }
    )
    if (!trimmed) { setHint('Enter an email to subscribe.'); shake(); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) { setHint("That email doesn't look right."); shake(); return }
    setSubmitted(true)
    setHint('')
  }

  return (
    <div className="page">
      {/* Page hero */}
      <div className="page-hero">
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="page-hero__inner">
          <span className="page-hero__num">N° 04 — Inner Circle</span>
          <h1 className="page-hero__title">Get in <em>Touch</em></h1>
          <p className="page-hero__sub">
            For stockist enquiries, press, or anything else — reach us below.
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="contact-grid reveal">

            {/* Left — newsletter + contact info */}
            <div className="contact-left">
              <div className="contact-block">
                <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>Inner Circle</span>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px,5vw,64px)', lineHeight: 0.9, fontWeight: 400, margin: '0 0 12px' }}>
                  Join the 77<br /><span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)', fontSize: '0.82em' }}>inner circle.</span>
                </h2>
                <p style={{ color: 'var(--text-mute)', lineHeight: 1.65, maxWidth: '38ch', fontSize: 15 }}>
                  Early access to drops, private studio addresses, and the occasional letter. No noise.
                </p>

                <form ref={formRef} className="news__form" noValidate onSubmit={handleSubmit}
                  style={{ marginTop: 28, ...(submitted ? { opacity: 0.4, pointerEvents: 'none' } : {}) }}>
                  <input
                    type="email" placeholder="your@email.com" aria-label="Email address"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" disabled={submitted}>Subscribe →</button>
                </form>
                {hint && <div className="news__hint show" aria-live="polite">{hint}</div>}
                <div className="news__legal" style={{ marginTop: 10 }}>By subscribing you agree to our privacy policy.</div>
                <div className={`news__success${submitted ? ' show' : ''}`} role="status" aria-live="polite">
                  <span className="dot" /> You&apos;re in. Welcome to the 77.
                </div>
              </div>

              <div className="contact-block" style={{ marginTop: 48, borderTop: '1px solid var(--line)', paddingTop: 40 }}>
                <span className="eyebrow" style={{ marginBottom: 16, display: 'block' }}>Direct</span>
                <div className="contact-links">
                  <a href="mailto:studio@seventyseven.studio" className="contact-link">
                    <span className="contact-link__label">Email</span>
                    <span className="contact-link__val">studio@seventyseven.studio</span>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="contact-link">
                    <span className="contact-link__label">Instagram</span>
                    <span className="contact-link__val">@seventyseven</span>
                  </a>
                  <div className="contact-link" style={{ cursor: 'default' }}>
                    <span className="contact-link__label">Studio</span>
                    <span className="contact-link__val">Alfama, Lisbon, Portugal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — FAQ */}
            <div className="contact-right">
              <span className="eyebrow" style={{ marginBottom: 24, display: 'block' }}>FAQ</span>
              <div className="faq-list">
                {faqs.map((f) => <FAQ key={f.q} q={f.q} a={f.a} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
