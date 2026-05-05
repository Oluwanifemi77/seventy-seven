const frames = [
  { cls: 'look look--tall reveal', p: -0.08, ph: 'ph--c', tag: 'FRAME I', numLabel: 'SS26', ed: 'Tidal — the colour of standing water before a storm.', cap: 'The 77 Series · I', numSize: 'clamp(180px, 28vw, 360px)' },
  { cls: 'look reveal', p: -0.05, ph: 'ph--b', tag: 'FRAME II', numLabel: 'II', cap: 'Cognac — Worn In' },
  { cls: 'look look--wide reveal', p: -0.06, ph: 'ph--d', tag: 'FRAME III', numLabel: 'III', ed: 'Two figures. One number. No apology.' },
  { cls: 'look look--tall reveal', p: -0.07, ph: 'ph--a', tag: 'FRAME IV', numLabel: 'IV', ed: 'Dark teal — the hour after midnight.', cap: 'The 77 Series · IV', numSize: 'clamp(180px, 28vw, 360px)' },
  { cls: 'look reveal', p: -0.04, ph: 'ph--e', tag: 'FRAME V', numLabel: 'V', cap: 'Bomber · Studio Light' },
  { cls: 'look look--wide reveal', p: -0.05, ph: 'ph--f', tag: 'FRAME VI', numLabel: 'VI', ed: 'Closing frame.' },
]

export default function Lookbook() {
  return (
    <section className="section" id="lookbook" aria-labelledby="lookHead" style={{ paddingRight: 0 }}>
      <header className="section__head reveal">
        <div className="titles">
          <span className="eyebrow">N° 02 — Editorial</span>
          <h2 id="lookHead">
            <span className="clip-line">The 77</span>
            <span className="clip-line">Lookbook <em>SS26</em></span>
          </h2>
        </div>
        <p className="meta">An editorial in three frames. Photographed in Lisbon, March 2026.</p>
      </header>

      <div className="lookbook" id="lookbookScroll" aria-label="Lookbook horizontal scroll">
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
                {f.ed && <div className="ed">{f.ed}</div>}
                {f.cap && <div className="cap">{f.cap}</div>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
