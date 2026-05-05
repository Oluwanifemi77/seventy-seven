export default function DropCard() {
  return (
    <section className="drop-wrap reveal" id="drop" aria-label="Current drop">
      <div className="drop-card">
        <div>
          <h2 className="drop-card__head">The Drop.</h2>
          <div className="drop-card__sub">SS26 Collection — Limited Pieces</div>
          <p className="drop-card__copy">
            The 77 standard. Refined for the season — seventy-seven numbered pieces, hand-finished, never restocked.
          </p>
        </div>
        <div className="drop-card__cta-row">
          <span className="drop-card__pulse">
            <span className="dot" />
            {' '}Live now · 077 left
          </span>
          <a
            href="#shop"
            className="btn btn--primary"
            onClick={(e) => { e.preventDefault(); document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            <span>Available Now</span>
            <span className="arr" />
          </a>
        </div>
      </div>
    </section>
  )
}
