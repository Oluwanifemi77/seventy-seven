import { useState } from 'react'
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
    onAddToCart()
    setTimeout(() => {
      setLabel('Add to Cart')
      setBusy(false)
    }, 1400)
  }

  return (
    <article className="card" data-name={product.name} data-price={product.price}>
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
            <span>{label}</span>
            <span className="arr" />
          </button>
          <button className="btn btn--icon" aria-label="Quick view">
            <EyeIcon />
          </button>
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

export default function Products({ onAddToCart }) {
  return (
    <section className="section" id="shop" aria-labelledby="shopHead">
      <header className="section__head reveal">
        <div className="titles">
          <span className="eyebrow">N° 01 — The Collection</span>
          <h2 id="shopHead">
            <span className="clip-line">New</span>
            <span className="clip-line">Arrivals <em>SS26</em></span>
          </h2>
        </div>
        <p className="meta">Six pieces. Hand-finished, numbered editions from the third series.</p>
      </header>

      <div className="products reveal-stagger">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}
