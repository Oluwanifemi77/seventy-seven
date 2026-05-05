const msgs = ['New Drop — SS26', '77 — Seventy Seven', 'Now Available', 'Limited Pieces']
const doubled = [...msgs, ...msgs, ...msgs, ...msgs]

export default function AnnouncementBar() {
  return (
    <div className="announce" aria-hidden="true">
      <div className="announce__track">
        {doubled.map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
    </div>
  )
}
