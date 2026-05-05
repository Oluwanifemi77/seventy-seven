function scrollTo(id) {
  const el = document.querySelector(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 8, behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="heroHead">
      {/* Gradient background */}
      <div className="hero__bg" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      {/* Decorative 77 — absolutely positioned, never overlaps text */}
      <div className="hero__giant" aria-hidden="true">
        <span>7</span><span className="seven-2">7</span>
      </div>
      <div className="hero__giant hero__giant--accent" aria-hidden="true">
        <span>7</span><span className="seven-2">7</span>
      </div>

      {/* All readable content sits above the 77 via z-index */}
      <div className="hero__top">
        <span>Spring / Summer 26</span>
        <span>The 77 Series — N° 003</span>
      </div>

      <div className="hero__stack">
        <span className="hero__label">Seventy Seven</span>
        <h1 className="hero__headline" id="heroHead">
          Wear the number.<br />
          <em>Own the narrative.</em>
        </h1>
        <p className="hero__sub">
          Seventy Seven is a contemporary streetwear label working at the seam between quiet luxury and raw urban energy. Limited runs. Cut, weighed, and finished by hand — never duplicated, never restocked.
        </p>
        <div className="hero__ctas">
          <a href="#shop" className="btn btn--primary" onClick={(e) => { e.preventDefault(); scrollTo('#shop') }}>
            <span>Shop the Collection</span>
            <span className="arr" />
          </a>
          <a href="#lookbook" className="btn btn--ghost" onClick={(e) => { e.preventDefault(); scrollTo('#lookbook') }}>
            <span>View Lookbook</span>
            <span className="arr" />
          </a>
        </div>
      </div>

      <div className="hero__meta">
        <div><strong>003</strong>Series in motion</div>
        <div><strong>77</strong>Pieces per drop</div>
        <div><strong>14d</strong>Average lead time</div>
        <div><strong>∞</strong>One per silhouette</div>
      </div>
    </section>
  )
}
