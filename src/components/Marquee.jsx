const items = [
  'Free shipping over $250',
  'New drop — May 7',
  'Limited to 77 units',
  'Made in small batches',
]
const doubled = [...items, ...items]

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
