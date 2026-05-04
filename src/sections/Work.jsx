import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Work() {
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
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/work/${p.slug}`}
              className="work-card"
              data-cursor-label="read"
            >
              <div className="work-card-image" aria-hidden="true" />
              <div className="work-card-inner">
                <p className="work-card-title">{p.title}</p>
                <p className="work-card-meta">{p.role} &middot; {p.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
