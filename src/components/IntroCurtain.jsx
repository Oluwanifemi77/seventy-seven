import { useEffect, useState } from 'react'

export default function IntroCurtain() {
  const [gone, setGone] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    document.body.classList.add('intro')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const delay = reduced ? 200 : 1900
    const t1 = setTimeout(() => {
      setGone(true)
      document.body.classList.remove('intro')
      document.body.classList.add('intro-done')
      const t2 = setTimeout(() => setRemoved(true), 900)
      return () => clearTimeout(t2)
    }, delay)
    return () => clearTimeout(t1)
  }, [])

  if (removed) return null

  return (
    <div className={`curtain${gone ? ' gone' : ''}`} aria-hidden="true">
      <div>
        <div className="curtain__line" />
        <div className="curtain__logo">
          <div className="curtain__num">
            <span>7</span>
            <span className="seven-2">7</span>
          </div>
          <div className="curtain__label">Seventy Seven</div>
        </div>
      </div>
    </div>
  )
}
