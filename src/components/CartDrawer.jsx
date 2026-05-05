import { useEffect } from 'react'

function scrollTo(id) {
  const el = document.querySelector(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 8, behavior: 'smooth' })
}

function CartItem({ item, onQtyChange, onRemove }) {
  return (
    <div className="cart-item">
      {/* Colour swatch / product thumbnail */}
      <div className="cart-item__swatch">
        <div className={`ph ${item.ph}`}>
          <span className="ph__num">77</span>
        </div>
      </div>

      <div className="cart-item__info">
        <div className="cart-item__name">{item.name}</div>
        <div className="cart-item__cat">{item.category}</div>
        <div className="cart-item__price">${(item.price * item.qty).toLocaleString()}</div>

        <div className="cart-item__controls">
          {/* Quantity stepper */}
          <div className="cart-item__qty" role="group" aria-label={`Quantity for ${item.name}`}>
            <button
              onClick={() => onQtyChange(item.id, item.qty - 1)}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span aria-live="polite">{item.qty}</span>
            <button
              onClick={() => onQtyChange(item.id, item.qty + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button className="cart-item__remove" onClick={() => onRemove(item.id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CartDrawer({ open, onClose, items, onQtyChange, onRemove }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const count = items.reduce((sum, i) => sum + i.qty, 0)

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && open) onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // Lock body scroll when open
  useEffect(() => {
    if (open) document.body.classList.add('menu-open')
    else document.body.classList.remove('menu-open')
    return () => document.body.classList.remove('menu-open')
  }, [open])

  const handleCheckout = (e) => {
    e.preventDefault()
    // Payment coming soon — no-op for now
    alert('Payment integration coming soon. Your cart has been saved.')
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cart-overlay${open ? ' open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={`cart-drawer${open ? ' open' : ''}`}
        aria-label="Shopping cart"
        aria-hidden={!open}
        role="dialog"
      >
        {/* Header */}
        <div className="cart-drawer__head">
          <div>
            <span className="cart-drawer__title">Your Cart</span>
            {count > 0 && (
              <span className="cart-drawer__count">{count} {count === 1 ? 'item' : 'items'}</span>
            )}
          </div>
          <button className="cart-drawer__close" onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </div>

        {/* Empty state */}
        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty__num">77</div>
            <p>Your cart is empty.<br />Every drop is limited to seventy-seven.</p>
            <a
              href="#shop"
              className="btn btn--primary"
              onClick={(e) => { e.preventDefault(); onClose(); setTimeout(() => scrollTo('#shop'), 300) }}
            >
              <span>Shop the Collection</span>
              <span className="arr" />
            </a>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="cart-items">
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQtyChange={onQtyChange}
                  onRemove={onRemove}
                />
              ))}
            </div>

            {/* Footer */}
            <div className="cart-footer">
              <div className="cart-subtotal">
                <span className="cart-subtotal__label">Subtotal</span>
                <span className="cart-subtotal__value">${total.toLocaleString()}</span>
              </div>
              <div className="cart-note">Shipping & taxes calculated at checkout</div>
              <div className="cart-checkout">
                <button className="btn btn--primary" onClick={handleCheckout}>
                  <span>Proceed to Checkout</span>
                  <span className="arr" />
                </button>
                <button
                  className="btn btn--ghost"
                  onClick={() => { onClose(); setTimeout(() => scrollTo('#shop'), 300) }}
                >
                  <span>Continue Shopping</span>
                </button>
              </div>
              <div className="cart-coming-soon">Payment integration coming soon</div>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
