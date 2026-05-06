import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import PasswordModal from '../components/PasswordModal'

const LABEL_SPEC = "element: section-label\nfont: DM Sans · 500\nsize: 10px\ntracking: 0.24em\ntransform: uppercase\ncolor: --label"
const TITLE_SPEC = "element: card-title\nfont: DM Serif Display · 400\nsize: 20px\nline-height: 1.3\ncolor: --text"
const META_SPEC  = "element: card-meta\nfont: DM Sans · regular\nsize: 11px\ntracking: 0.02em\ncolor: --label"

const PROTECTED = ['carboledger']

export default function Work() {
  const navigate = useNavigate()
  const [pendingSlug, setPendingSlug] = useState(null)

  const handleCardClick = (e, slug) => {
    if (PROTECTED.includes(slug)) {
      e.preventDefault()
      setPendingSlug(slug)
    }
  }

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
              onClick={(e) => handleCardClick(e, p.slug)}
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

      {pendingSlug && (
        <PasswordModal
          onSuccess={() => { setPendingSlug(null); navigate(`/work/${pendingSlug}`) }}
          onClose={() => setPendingSlug(null)}
        />
      )}
    </section>
  )
}
