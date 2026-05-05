const cats = [
  { cls: 'cat cat--tops', href: '#shop', label: 'Browse Tops', num: '01 / 03', title: 'Tops', ghost: '01' },
  { cls: 'cat cat--bottoms', href: '#shop', label: 'Browse Bottoms', num: '02 / 03', title: 'Bottoms', ghost: '02' },
  { cls: 'cat cat--acc', href: '#shop', label: 'Browse Accessories', num: '03 / 03', title: 'Accessories', ghost: '03' },
]

function scrollTo(id) {
  const el = document.querySelector(id)
  if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 8; window.scrollTo({ top: y, behavior: 'smooth' }) }
}

export default function Categories() {
  return (
    <section className="section" aria-labelledby="catHead">
      <header className="section__head reveal">
        <div className="titles">
          <span className="eyebrow">N° 03 — Categories</span>
          <h2 id="catHead">
            <span className="clip-line">Shop by</span>
            <span className="clip-line"><em>silhouette</em></span>
          </h2>
        </div>
        <p className="meta">Three categories. Built to layer, weighted to last.</p>
      </header>

      <div className="cats reveal-stagger">
        {cats.map((c) => (
          <a
            key={c.title}
            className={c.cls}
            href={c.href}
            aria-label={c.label}
            onClick={(e) => { e.preventDefault(); scrollTo(c.href) }}
          >
            <div className="cat__bg">
              <span className="ghost">{c.ghost}</span>
            </div>
            <div className="cat__content">
              <div className="cat__num">{c.num}</div>
              <h3 className="cat__title">{c.title}</h3>
              <span className="cat__cta">
                Browse <span className="arr" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
