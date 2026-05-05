import { useState, useEffect } from 'react'

export default function DesignSpecTooltip() {
  const [spec, setSpec]       = useState(null)
  const [pos, setPos]         = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const show = (el) => {
      const rect = el.getBoundingClientRect()
      const x = Math.min(Math.max(8, rect.left), window.innerWidth - 220)
      // flip above if too close to bottom
      const approxH = 140
      const y = rect.bottom + 8 + approxH > window.innerHeight
        ? rect.top - approxH - 8
        : rect.bottom + 8
      setSpec(el.dataset.designSpec)
      setPos({ x, y })
      setVisible(true)
    }

    const onOver = (e) => {
      const el = e.target.closest('[data-design-spec]')
      if (el) show(el)
      else setVisible(false)
    }

    const onOut = (e) => {
      if (!e.relatedTarget?.closest('[data-design-spec]')) setVisible(false)
    }

    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    return () => {
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  if (!spec) return null

  return (
    <div
      className={`design-spec-box${visible ? ' visible' : ''}`}
      style={{ left: pos.x, top: pos.y }}
      aria-hidden="true"
    >
      {spec.split('\n').map((line, i) => {
        const ci = line.indexOf(': ')
        if (ci === -1) return (
          <div key={i} className="spec-row">
            <span className="spec-val">{line}</span>
          </div>
        )
        return (
          <div key={i} className="spec-row">
            <span className="spec-key">{line.slice(0, ci)}</span>
            <span className="spec-val">{line.slice(ci + 2)}</span>
          </div>
        )
      })}
    </div>
  )
}
