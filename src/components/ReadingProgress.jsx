import { useState, useEffect } from 'react'

const getLabel = (pct) => {
  if (pct < 20) return "You're just getting started."
  if (pct < 50) return "You're about halfway. The good stuff is below."
  if (pct < 80) return 'Almost there.'
  return "That's all. Thanks for reading slowly."
}

export default function ReadingProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (scrollable <= 0) return
      setPct(Math.min(100, (window.scrollY / scrollable) * 100))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="reading-progress">
      <div className="reading-bar-track">
        <div className="reading-bar-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="reading-text">{getLabel(pct)}</span>
    </div>
  )
}
