import { Link } from 'react-router-dom'
import { useScrollReveal, useParallax } from '../hooks/useScrollReveal.js'

const frames = [
  { cls: 'look look--tall reveal', p: -0.08, ph: 'ph--c', tag: 'FRAME I',   numLabel: 'SS26', ed: 'Tidal — the colour of standing water before a storm.', cap: 'The 77 Series · I',  numSize: 'clamp(180px,28vw,360px)' },
  { cls: 'look reveal',            p: -0.05, ph: 'ph--b', tag: 'FRAME II',  numLabel: 'II',   cap: 'Cognac — Worn In' },
  { cls: 'look look--wide reveal', p: -0.06, ph: 'ph--d', tag: 'FRAME III', numLabel: 'III',  ed: 'Two figures. One number. No apology.' },
  { cls: 'look look--tall reveal', p: -0.07, ph: 'ph--a', tag: 'FRAME IV',  numLabel: 'IV',   ed: 'Dark teal — the hour after midnight.', cap: 'The 77 Series · IV', numSize: 'clamp(180px,28vw,360px)' },
  { cls: 'look reveal',            p: -0.04, ph: 'ph--e', tag: 'FRAME V',   numLabel: 'V',    cap: 'Bomber · Studio Light' },
  { cls: 'look look--wide reveal', p: -0.05, ph: 'ph--f', tag: 'FRAME VI',  numLabel: 'VI',   ed: 'Closing frame.' },
]

export default function Lookbook() {
  useScrollReveal()
  useParallax()

  return (
    <div className="page">
      {/* Page hero */}
      <div className="page-hero">
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="page-hero__inner">
          <span className="page-hero__num">N° 02 — Editorial</span>
          <h1 className="page-hero__title">The 77 <em>Lookbook</em></h1>
          <p className="page-hero__sub">
            An editorial in six frames. Photographed in Lisbon, March 2026.
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip */}
      <section style={{ paddingTop: 'clamp(40px,6vh,72px)' }}>
        <div className="lookbook" aria-label="Lookbook horizontal scroll">
          <div className="lookbook__strip">
            {frames.map((f, i) => (
              <article key={i} className={f.cls} style={{ '--p': f.p }}>
                <div className="look__inner" data-parallax>
                  <div className={`ph ${f.ph}`} style={{ position: 'absolute', inset: 0 }}>
                    <span className="ph__tag">{f.tag}</span>
                    <span className="ph__num" style={f.numSize ? { fontSize: f.numSize } : {}}>77</span>
                  </div>
                </div>
                <div className="look__label">
                  <div className="num">{f.numLabel}</div>
                  {f.ed  && <div className="ed">{f.ed}</div>}
                  {f.cap && <div className="cap">{f.cap}</div>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Credits / CTA */}
      <section className="section reveal" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, textAlign: 'center' }}>
          <span className="eyebrow">Shot on location — Lisbon, PT · March 2026</span>
          <p style={{ color: 'var(--text-mute)', maxWidth: '42ch', lineHeight: 1.7, fontSize: 15 }}>
            Every frame in the lookbook is styled with pieces from the SS26 drop. Limited to seventy-seven numbered units — available now while stock lasts.
          </p>
          <Link to="/shop" className="btn btn--primary">
            <span>Shop the Collection</span>
            <span className="arr" />
          </Link>
        </div>
      </section>
    </div>
  )
}
