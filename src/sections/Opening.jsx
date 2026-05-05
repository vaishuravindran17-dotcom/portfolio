import { useState, useEffect } from 'react'

const getGreeting = () => {
  const h = new Date().getHours()
  if (h >= 5 && h < 12)  return "Good morning. You're up early. So am I, sometimes."
  if (h >= 12 && h < 18) return "Good afternoon. Hope the thinking's been good today."
  if (h >= 18 && h < 22) return "Good evening. The quiet hours are starting."
  return "It's late. This is when I do my best work too."
}

const QUOTE_SPEC = "element: opening-quote\nfont: DM Serif Display · italic\nsize: clamp(15–22px)\ntracking: -0.01em\nline-height: 1.3"
const LABEL_SPEC = "element: section-label\nfont: DM Sans · 500\nsize: 10px\ntracking: 0.24em\ntransform: uppercase\ncolor: --label"

export default function Opening() {
  const [greeting, setGreeting] = useState(getGreeting)

  useEffect(() => {
    const id = setInterval(() => setGreeting(getGreeting()), 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section opening-section" data-zone="opening">
      <div className="container">
        {/* swap the div for <img src="/vaishali.jpg" alt="Vaishali" /> when the photo is ready */}
        <div className="opening-avatar" aria-hidden="true" />

        <p
          className="opening-quote"
          data-design-spec={QUOTE_SPEC}
        >
          &ldquo;We will never be able to become the user. So I just try to stay close.&rdquo;
        </p>

        <p className="opening-greeting">{greeting}</p>

        <p className="opening-currently">
          Currently: designing through complexity at Carboledger, building a puzzle game called Deduce,
          and looking for the next street to walk down.
        </p>
      </div>
    </section>
  )
}
