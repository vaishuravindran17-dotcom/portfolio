import { useEffect, useRef, useState } from 'react'

const TAIL_COUNT = 5
const TAIL_OPACITY = [0.5, 0.32, 0.2, 0.1, 0.05]
const TAIL_SIZE = [7, 6, 5, 4, 3]

const ZONE_COLORS = {
  default: null, // falls back to CSS var(--accent)
  who: '#9E8E82',
  work: '#C4724A',
  'art-trials': '#7A9E7E',
  'vibe-coded': '#4A6FA5',
  play: '#D4A044',
  'things-i-notice': '#555',
  writing: '#1F1A14',
  footer: null,
}

export default function Cursor() {
  const isMobile = useRef(
    typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  )

  const rootRef = useRef(null)
  const mainRef = useRef(null)
  const tailRefs = useRef([])
  const labelRef = useRef(null)

  const pos = useRef({ x: -100, y: -100 })
  const history = useRef(Array(TAIL_COUNT).fill({ x: -100, y: -100 }))
  const color = useRef('var(--accent)')
  const rafId = useRef(null)
  const lastMove = useRef(0)
  const labelTimeout = useRef(null)

  const [label, setLabel] = useState('')
  const [showLabel, setShowLabel] = useState(false)
  const [isBloom, setIsBloom] = useState(false)

  useEffect(() => {
    if (isMobile.current) return

    const root = rootRef.current
    const main = mainRef.current
    if (!root || !main) return

    const onMove = (e) => {
      const x = e.clientX
      const y = e.clientY
      pos.current = { x, y }
      lastMove.current = Date.now()

      history.current = [{ x, y }, ...history.current.slice(0, TAIL_COUNT - 1)]

      // Detect zone color
      const el = document.elementFromPoint(x, y)
      if (el) {
        const zoneEl = el.closest('[data-zone]')
        const zoneName = zoneEl?.dataset.zone
        const zoneColor = ZONE_COLORS[zoneName]
        color.current = zoneColor || 'var(--accent)'

        // Detect label from interactive element
        const labelEl = el.closest('[data-cursor-label]')
        if (labelEl) {
          const lbl = labelEl.dataset.cursorLabel
          setLabel(lbl)
          setShowLabel(true)
          if (labelTimeout.current) clearTimeout(labelTimeout.current)
        } else {
          setShowLabel(false)
          clearTimeout(labelTimeout.current)
          labelTimeout.current = setTimeout(() => {
            if (zoneEl) {
              const zoneLabel = zoneEl.dataset.zoneLabel
              if (zoneLabel) {
                setLabel(zoneLabel)
                setShowLabel(true)
              }
            }
          }, 800)
        }
      }
    }

    const onDown = () => {
      setIsBloom(true)
      setTimeout(() => setIsBloom(false), 220)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)

    const animate = () => {
      const { x, y } = pos.current
      const idle = Date.now() - lastMove.current > 60

      main.style.left = `${x}px`
      main.style.top = `${y}px`
      main.style.color = color.current

      tailRefs.current.forEach((el, i) => {
        if (!el) return
        const h = history.current[i] || { x, y }
        el.style.left = `${h.x}px`
        el.style.top = `${h.y}px`
        el.style.opacity = idle ? '0' : String(TAIL_OPACITY[i])
        el.style.color = color.current
      })

      if (labelRef.current) {
        labelRef.current.style.left = `${x}px`
        labelRef.current.style.top = `${y}px`
        labelRef.current.style.color = color.current
      }

      rafId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      cancelAnimationFrame(rafId.current)
      clearTimeout(labelTimeout.current)
    }
  }, [])

  if (isMobile.current) return null

  return (
    <div ref={rootRef} className="cursor-root" aria-hidden="true">
      {/* Tail dots */}
      {Array.from({ length: TAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={el => (tailRefs.current[i] = el)}
          className="cursor-dot"
          style={{
            width: TAIL_SIZE[i],
            height: TAIL_SIZE[i],
            background: 'currentColor',
            opacity: 0,
            position: 'absolute',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            willChange: 'left, top, opacity',
            transition: 'opacity 120ms ease',
          }}
        />
      ))}

      {/* Main circle */}
      <div
        ref={mainRef}
        className={`cursor-dot cursor-main${isBloom ? ' bloom' : ''}`}
        style={{ position: 'absolute' }}
      />

      {/* Label */}
      <div
        ref={labelRef}
        className={`cursor-label${showLabel ? ' visible' : ''}`}
      >
        {label}
      </div>
    </div>
  )
}
