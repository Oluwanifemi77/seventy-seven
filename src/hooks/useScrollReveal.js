import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to every .reveal and .reveal-stagger
 * element in the document and adds the "in" class when they enter the viewport.
 * Call once at App level after the full component tree is mounted.
 */
export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    const els = document.querySelectorAll('.reveal, .reveal-stagger')
    els.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])
}

/**
 * Attaches a scroll listener for the lookbook parallax effect.
 */
export function useParallax() {
  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll('[data-parallax]').forEach((el) => {
        const r = el.getBoundingClientRect()
        const vh = window.innerHeight
        const center = (r.top + r.height / 2 - vh / 2) / vh
        const p = parseFloat(
          el.parentElement.style.getPropertyValue('--p') || '-0.05'
        )
        el.style.transform = `translateY(${center * p * 100}px)`
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
