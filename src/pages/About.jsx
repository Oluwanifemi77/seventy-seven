import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const pillars = [
  { num: '01', title: 'The Number', body: 'Seventy-seven. Not a brand name — a hard limit. Every drop is capped at exactly seventy-seven numbered pieces. No exceptions. No restocks.' },
  { num: '02', title: 'The Standard', body: 'Each piece is weighed, cut, and finished by hand in our Lisbon studio before it ships. Quality is built into the constraint.' },
  { num: '03', title: 'The Silence', body: 'No seasonal chaos. No noise. We drop when the work is ready — not when the calendar says so. One series at a time.' },
]

export default function About() {
  useScrollReveal()

  return (
    <div className="page">
      {/* Page hero */}
      <div className="page-hero">
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="page-hero__inner">
          <span className="page-hero__num">N° 03 — House</span>
          <h1 className="page-hero__title">The <em>Story</em></h1>
          <p className="page-hero__sub">
            Contemporary streetwear, working at the seam between quiet luxury and raw urban energy. Est. 2024, Lisbon.
          </p>
        </div>
      </div>

      {/* Manifesto */}
      <section className="manifesto reveal" aria-labelledby="manHead">
        <div className="manifesto__bg" aria-hidden="true">77</div>
        <div className="manifesto__inner">
          <span className="eyebrow">Manifesto</span>
          <h2 id="manHead">
            <span className="line">77 is not a number.</span>
            <span className="line"><strong>It is a standard.</strong> A cut. A line</span>
            <span className="line">you do not <em>cross</em> twice.</span>
          </h2>
          <div className="manifesto__sig">Seventy Seven · Est. 2024</div>
        </div>
      </section>

      {/* Brand pillars */}
      <section className="section">
        <div className="container">
          <header className="section__head reveal" style={{ padding: 0, marginBottom: 'clamp(40px,6vh,64px)' }}>
            <div className="titles">
              <span className="eyebrow">What We Stand For</span>
              <h2><span className="clip-line">Three</span><span className="clip-line"><em>Pillars</em></span></h2>
            </div>
          </header>

          <div className="about-pillars reveal-stagger">
            {pillars.map((p) => (
              <div key={p.num} className="about-pillar">
                <span className="about-pillar__num">{p.num}</span>
                <h3 className="about-pillar__title">{p.title}</h3>
                <p className="about-pillar__body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio section */}
      <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="about-studio reveal">
            <div>
              <span className="eyebrow">The Studio</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.1, margin: '12px 0 20px' }}>
                Lisbon. Where the light is honest.
              </h2>
              <p style={{ color: 'var(--text-mute)', lineHeight: 1.7, maxWidth: '44ch' }}>
                We work out of a single studio in Alfama, Lisbon. Small team. Focused on process over output. Every decision — from the weight of a fabric to the placement of a seam — is made with intent.
              </p>
              <p style={{ color: 'var(--text-mute)', lineHeight: 1.7, maxWidth: '44ch', marginTop: 16 }}>
                We ship worldwide. Lead time is fourteen days. You will receive an order number, a piece number, and nothing else you don't need.
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                <Link to="/shop" className="btn btn--primary">
                  <span>Shop the Collection</span><span className="arr" />
                </Link>
                <Link to="/contact" className="btn btn--ghost">
                  <span>Get in Touch</span><span className="arr" />
                </Link>
              </div>
            </div>
            <div className="about-studio__visual">
              <div className="ph ph--a" style={{ position: 'absolute', inset: 0 }}>
                <span className="ph__num" style={{ fontSize: 'clamp(80px,14vw,160px)', color: 'rgba(255,255,255,0.05)' }}>77</span>
              </div>
              <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, zIndex: 2 }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 18, color: 'rgba(245,239,230,0.85)', lineHeight: 1.4 }}>
                  Alfama Studio, Lisbon<br />
                  <span style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6, fontStyle: 'normal', fontFamily: "'Jost', sans-serif" }}>Est. 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
