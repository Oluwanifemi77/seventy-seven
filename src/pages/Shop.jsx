import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { products } from '../data/products.js'

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    </svg>
  )
}

function ProductCard({ product, onAddToCart }) {
  const [busy, setBusy] = useState(false)
  const [label, setLabel] = useState('Add to Cart')

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (busy) return
    setBusy(true)
    setLabel('Added ✓')
    onAddToCart(product)
    setTimeout(() => { setLabel('Add to Cart'); setBusy(false) }, 1400)
  }

  return (
    <article className="card">
      <div className="card__media">
        <div className={`ph ${product.ph}`}>
          <span className="ph__tag">{product.tag}</span>
          <span className="ph__num">77</span>
          <div className="ph__cap">
            <span>{product.material}</span>
            <span>{product.color}</span>
          </div>
        </div>
        <div className="card__quick">
          <button
            className="btn btn--block add-cart"
            aria-label={`Add ${product.name} to cart`}
            onClick={handleAdd}
            style={busy ? { background: 'var(--cognac)', color: 'var(--cream)' } : {}}
          >
            <span>{label}</span><span className="arr" />
          </button>
          <button className="btn btn--icon" aria-label="Quick view"><EyeIcon /></button>
        </div>
      </div>
      <div className="card__info">
        <span className="card__name">{product.name}</span>
        <span className="card__price">${product.price}</span>
        <span className="card__cat">{product.category}</span>
      </div>
    </article>
  )
}

const FILTERS = ['All', 'Tops', 'Bottoms', 'Outerwear', 'Accessories']

export default function Shop({ onAddToCart }) {
  useScrollReveal()
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? products
    : products.filter((p) => p.category.toLowerCase().includes(active.toLowerCase()))

  return (
    <div className="page">
      {/* Page hero */}
      <div className="page-hero">
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="page-hero__inner">
          <span className="page-hero__num">N° 01 — The Collection</span>
          <h1 className="page-hero__title">Shop <em>SS26</em></h1>
          <p className="page-hero__sub">
            Seventy-seven numbered pieces per drop. Hand-finished, never restocked. The number is the standard.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="shop-filters reveal">
        <div className="container">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`shop-filter-btn${active === f ? ' active' : ''}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="section" style={{ paddingTop: 'clamp(32px,4vh,52px)' }}>
        <div className="products reveal-stagger">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px var(--gutter)', color: 'var(--text-mute)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '12px' }}>
            No pieces in this category yet.
          </div>
        )}
      </div>
    </div>
  )
}
