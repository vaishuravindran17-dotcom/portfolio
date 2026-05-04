import { useState, useEffect, useRef } from 'react'

const FAST_THRESHOLD = 18   // px/ms
const SLOW_THRESHOLD = 0.8  // px/ms — continuous slow scroll
const TOAST_DURATION = 2000

export default function ScrollToast() {
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)

  const lastY = useRef(window.scrollY)
  const lastTime = useRef(Date.now())
  const hideTimer = useRef(null)
  const slowTimer = useRef(null)
  const toastShownAt = useRef(0)
  const consecutiveSlow = useRef(0)

  useEffect(() => {
    const show = (msg) => {
      if (Date.now() - toastShownAt.current < 3000) return
      toastShownAt.current = Date.now()
      setMessage(msg)
      setVisible(true)
      clearTimeout(hideTimer.current)
      hideTimer.current = setTimeout(() => setVisible(false), TOAST_DURATION)
    }

    const onScroll = () => {
      const now = Date.now()
      const dy = Math.abs(window.scrollY - lastY.current)
      const dt = now - lastTime.current || 1
      const speed = dy / dt

      if (speed > FAST_THRESHOLD) {
        consecutiveSlow.current = 0
        show('slow down.')
      } else if (speed < SLOW_THRESHOLD && dy > 0) {
        consecutiveSlow.current += 1
        if (consecutiveSlow.current > 6) {
          consecutiveSlow.current = 0
          show('good, take your time.')
        }
      } else {
        consecutiveSlow.current = 0
      }

      lastY.current = window.scrollY
      lastTime.current = now
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(hideTimer.current)
      clearTimeout(slowTimer.current)
    }
  }, [])

  return (
    <div className={`scroll-toast${visible ? ' visible' : ''}`} aria-hidden="true">
      {message}
    </div>
  )
}
