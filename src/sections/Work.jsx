import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const LABEL_SPEC = "element: section-label\nfont: DM Sans · 500\nsize: 10px\ntracking: 0.24em\ntransform: uppercase\ncolor: --label"
const TITLE_SPEC = "element: card-title\nfont: DM Serif Display · 400\nsize: 20px\nline-height: 1.3\ncolor: --text"
const META_SPEC  = "element: card-meta\nfont: DM Sans · regular\nsize: 11px\ntracking: 0.02em\ncolor: --label"

export default function Work() {
  return (
    <section
      id="work"
      className="section"
      data-zone="work"
      data-zone-label="read"
    >
      <div className="container">
        <span className="section-label" data-design-spec={LABEL_SPEC}>work</span>

        <div className="work-list">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to={`/work/${p.slug}`}
              className="work-card"
              data-cursor-label="read"
            >
              <div className="work-card-image" aria-hidden="true">
                {p.cover && <img src={p.cover} alt="" />}
              </div>
              <div className="work-card-inner">
                <p className="work-card-title" data-design-spec={TITLE_SPEC}>{p.title}</p>
                <p className="work-card-meta" data-design-spec={META_SPEC}>{p.company || p.role} &middot; {p.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
