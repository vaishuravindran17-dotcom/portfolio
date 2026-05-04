import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const getChennaTime = () => {
  return new Date().toLocaleTimeString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
}

export default function Who() {
  const { isFeeling } = useTheme()
  const [time, setTime] = useState(getChennaTime)

  useEffect(() => {
    const id = setInterval(() => setTime(getChennaTime()), 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="who"
      className="section"
      data-zone="who"
      data-zone-label="this is me"
      data-cursor-label="this is me"
    >
      <div className="container">
        <span className="section-label">who</span>

        <div className="mode-wrapper">
          <div className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            <p className="who-body">
              I&rsquo;m Vaishali &mdash; a product designer based in Chennai. I chose B2B on purpose,
              because the puzzles are harder and the answers are never obvious. I&rsquo;ll spend
              hours just understanding what a product does, who&rsquo;s stuck inside it and why,
              before I touch a single frame.
            </p>
            <p className="who-body">
              I don&rsquo;t think complexity is the enemy. I think it&rsquo;s the material.
            </p>
          </div>

          <div className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            <p className="who-body">
              Product designer, 6 years. Specialised in B2B and enterprise SaaS across
              climate tech, fleet management, and async collaboration tools. I work across
              the full product lifecycle &mdash; research, strategy, design, testing, and roadmap.
              I&rsquo;ve taken a product from zero to $100k in pilots and production launches.
              Currently at Carboledger, Chennai.
            </p>
          </div>
        </div>

        <div className="who-clock">
          <time>{time}</time> in Chennai
          <span className="who-clock-label">Vaishali&rsquo;s time</span>
        </div>
      </div>
    </section>
  )
}
