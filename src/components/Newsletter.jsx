import { useRef, useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [hint, setHint] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (submitted) return
    const trimmed = email.trim()
    const shake = () =>
      formRef.current?.animate(
        [{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }],
        { duration: 260 }
      )
    if (!trimmed) { setHint('Enter an email to subscribe.'); shake(); return }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) { setHint("That email doesn't look right."); shake(); return }
    setSubmitted(true)
    setHint('')
  }

  return (
    <section className="news reveal" id="contact" aria-labelledby="newsHead">
      <div>
        <span className="eyebrow">N° 04 — Inner Circle</span>
        <h2 id="newsHead">
          Join the 77<br />
          <em>inner circle.</em>
        </h2>
        <p>
          Early access to drops, private addresses, and the occasional letter from the studio. No noise. Every piece on the site is limited to seventy-seven.
        </p>
      </div>
      <div>
        <form ref={formRef} className="news__form" noValidate onSubmit={handleSubmit}
          style={submitted ? { opacity: 0.4, pointerEvents: 'none' } : {}}>
          <input
            type="email"
            placeholder="your@email.com"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" aria-label="Subscribe" disabled={submitted}>Subscribe →</button>
        </form>
        <div className={`news__hint${hint ? ' show' : ''}`} aria-live="polite">{hint}</div>
        <div className="news__legal">By subscribing you agree to our privacy policy.</div>
        <div className={`news__success${submitted ? ' show' : ''}`} role="status" aria-live="polite">
          <span className="dot" /> You&apos;re in. Welcome to the 77.
        </div>
      </div>
    </section>
  )
}
