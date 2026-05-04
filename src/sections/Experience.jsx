import { useTheme } from '../context/ThemeContext'

const experiences = [
  {
    company: 'Carboledger',
    role: 'Product Designer',
    period: 'Feb 2024 – Present',
    type: 'Full-time',
    feeling: "Went from designer to owning the product — research, roadmap, client calls, demos. The full thing.",
    thinking: "End-to-end product ownership across ISCC tooling, Contribution Analysis, and AI × ESG agents. Research, usability testing, client coordination, roadmap planning.",
  },
  {
    company: 'Spiti',
    role: 'Product Designer',
    period: 'Jun 2022 – Dec 2023',
    type: 'Remote',
    feeling: "Where I learned that integrity and systematic thinking are design tools too.",
    thinking: "Design system, web and mobile UI, screen recorder, AI summary, action items, product website.",
  },
  {
    company: 'Roado',
    role: 'UI/UX Designer',
    period: 'Apr 2021 – Jun 2022',
    type: 'Remote',
    feeling: "My first job. Everyday I didn't know something I didn't know I didn't know.",
    thinking: "UI/UX across industries and transporters verticals. Research, strategy, front-end enhancements.",
  },
  {
    company: 'Collej',
    role: 'Mentor',
    period: 'Mar 2023 – Present',
    type: null,
    feeling: "A student asked me something I couldn't answer cleanly. I've been thinking about it since.",
    thinking: "Mentoring early-stage design students in critique, essentials, and interaction design.",
  },
]

export default function Experience() {
  const { isFeeling } = useTheme()

  return (
    <section className="section" data-zone="who">
      <div className="container">
        <span className="section-label">experience</span>

        <div style={{ marginBottom: 24 }} className="mode-wrapper">
          <p className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}
            style={{ fontSize: 15, lineHeight: 1.75, marginBottom: 0 }}>
            Every place gave me something I didn&rsquo;t know I needed.
          </p>
          <p className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}
            style={{ fontSize: 15, lineHeight: 1.75, marginBottom: 0 }}>
            Roles and what I was building at each stop.
          </p>
        </div>

        <div className="exp-list">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.role}`} className="exp-item">
              <div className="exp-header">
                <span>
                  <span className="exp-company">{exp.company}</span>
                  <span style={{ color: 'var(--secondary)', margin: '0 6px', fontSize: 12 }}>·</span>
                  <span className="exp-role">{exp.role}</span>
                </span>
                <span className="exp-period">
                  {exp.period}{exp.type ? ` · ${exp.type}` : ''}
                </span>
              </div>

              <div className="mode-wrapper">
                <p className={`exp-desc mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
                  {exp.feeling}
                </p>
                <p className={`exp-desc mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
                  {exp.thinking}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
