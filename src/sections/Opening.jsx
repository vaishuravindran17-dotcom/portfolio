import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const getGreeting = () => {
  const h = new Date().getHours()
  if (h >= 5 && h < 12)  return "Good morning. You're up early. So am I, sometimes."
  if (h >= 12 && h < 18) return "Good afternoon. Hope the thinking's been good today."
  if (h >= 18 && h < 22) return "Good evening. The quiet hours are starting."
  return "It's late. This is when I do my best work too."
}

const getChennaTime = () =>
  new Date().toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

const QUOTE_SPEC = "element: opening-quote\nfont: DM Serif Display · italic\nsize: clamp(15–22px)\ntracking: -0.01em\nline-height: 1.3"
const BODY_SPEC  = "element: body-copy\nfont: DM Sans · regular\nsize: 15px\nline-height: 1.8\ncolor: --text"

export default function Opening() {
  const { isFeeling } = useTheme()
  const [greeting, setGreeting] = useState(getGreeting)
  const [time, setTime]         = useState(getChennaTime)

  useEffect(() => {
    const id = setInterval(() => {
      setGreeting(getGreeting())
      setTime(getChennaTime())
    }, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="section opening-section" data-zone="opening">
      <div className="container">
        <p className="opening-greeting">{greeting}</p>

        {/* swap div for <img src="/vaishali.jpg" alt="Vaishali" /> when photo is ready */}
        <div className="opening-avatar" aria-hidden="true" />

        <p className="opening-quote" data-design-spec={QUOTE_SPEC}>
          &ldquo;We will never be able to become the user. So I just try to stay close.&rdquo;
        </p>

        <div className="mode-wrapper" style={{ marginBottom: 14 }}>
          <div className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            <p className="who-body" data-design-spec={BODY_SPEC}>
              I&rsquo;m Vaishali &mdash; a product designer based in Chennai. I chose B2B on purpose,
              because the puzzles are harder and the answers are never obvious. I&rsquo;ll spend
              hours just understanding what a product does, who&rsquo;s stuck inside it and why,
              before I touch a single frame.
            </p>
            <p className="who-body" data-design-spec={BODY_SPEC}>
              I don&rsquo;t think complexity is the enemy. I think it&rsquo;s the material.
            </p>
          </div>

          <div className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            <p className="who-body" data-design-spec={BODY_SPEC}>
              Product designer, 6 years. Specialised in{' '}
              <mark className="hl">B2B and enterprise SaaS</mark>{' '}
              across climate tech, fleet management, and async collaboration tools.
              I work across the full product lifecycle &mdash; research, strategy, design,
              testing, and roadmap. I&rsquo;ve taken a product from{' '}
              <mark className="hl">zero to $100k</mark>{' '}
              in pilots and production launches. Currently at{' '}
              <mark className="hl">Carboledger</mark>.
            </p>
          </div>
        </div>

        <p className="opening-currently">
          Currently: designing through complexity at Carboledger, building a puzzle game called Deduce,
          and looking for the next street to walk down.
        </p>

        <div className="who-clock">
          <time>{time}</time> in Chennai
          <span className="who-clock-label">Vaishali&rsquo;s time</span>
        </div>
      </div>
    </section>
  )
}
