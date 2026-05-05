import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Hero from '../components/Hero.jsx'
import DropCard from '../components/DropCard.jsx'
import Marquee from '../components/Marquee.jsx'
import { products } from '../data/products.js'
import { useScrollReveal, useParallax } from '../hooks/useScrollReveal.js'
import { useState } from 'react'

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    </svg>
  )
}

function FeaturedCard({ product, onAddToCart }) {
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

const cats = [
  { cls: 'cat cat--tops', to: '/shop', label: 'Browse Tops', num: '01 / 03', title: 'Tops', ghost: '01' },
  { cls: 'cat cat--bottoms', to: '/shop', label: 'Browse Bottoms', num: '02 / 03', title: 'Bottoms', ghost: '02' },
  { cls: 'cat cat--acc', to: '/shop', label: 'Browse Accessories', num: '03 / 03', title: 'Accessories', ghost: '03' },
]

export default function Home({ onAddToCart }) {
  useScrollReveal()
  useParallax()

  return (
    <div className="page">
      <Hero />
      <DropCard />
      <Marquee />

      {/* Featured products — first 3 */}
      <section className="section" id="shop" aria-labelledby="featHead">
        <header className="section__head reveal">
          <div className="titles">
            <span className="eyebrow">N° 01 — New In</span>
            <h2 id="featHead">
              <span className="clip-line">Featured</span>
              <span className="clip-line">Arrivals <em>SS26</em></span>
            </h2>
          </div>
          <p className="meta">Six pieces. Numbered, hand-finished, never restocked.</p>
        </header>

        <div className="products reveal-stagger">
          {products.slice(0, 3).map((p) => (
            <FeaturedCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'clamp(32px,4vh,52px)', padding: '0 var(--gutter)' }}>
          <Link to="/shop" className="btn btn--ghost">
            <span>View Full Collection</span>
            <span className="arr" />
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="section" aria-labelledby="catHead">
        <header className="section__head reveal">
          <div className="titles">
            <span className="eyebrow">N° 02 — Categories</span>
            <h2 id="catHead">
              <span className="clip-line">Shop by</span>
              <span className="clip-line"><em>silhouette</em></span>
            </h2>
          </div>
          <p className="meta">Three categories. Built to layer, weighted to last.</p>
        </header>
        <div className="cats reveal-stagger">
          {cats.map((c) => (
            <Link key={c.title} className={c.cls} to={c.to} aria-label={c.label}>
              <div className="cat__bg"><span className="ghost">{c.ghost}</span></div>
              <div className="cat__content">
                <div className="cat__num">{c.num}</div>
                <h3 className="cat__title">{c.title}</h3>
                <span className="cat__cta">Browse <span className="arr" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
