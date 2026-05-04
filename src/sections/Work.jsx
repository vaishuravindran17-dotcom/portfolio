import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { projects } from '../data/projects'

export default function Work() {
  const { isFeeling } = useTheme()

  return (
    <section
      id="work"
      className="section"
      data-zone="work"
      data-zone-label="read"
    >
      <div className="container">
        <span className="section-label">work</span>

        <div className="work-list">
          {projects.map((p) => {
            const content = isFeeling ? p.feeling : p.thinking
            return (
              <Link
                key={p.slug}
                to={`/work/${p.slug}`}
                className="work-card"
                data-cursor-label="read"
              >
                <p className="work-card-title">{p.title}</p>
                <p className="work-card-body">{content.body}</p>
                <div className="work-tags">
                  {p.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                  <span className="tag">{p.year}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
