import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { getProject, getAdjacentProjects } from '../data/projects'
import Footer from '../components/Footer'

function ImageSlot({ label = 'Image placeholder' }) {
  return (
    <div className="project-image-slot">
      <span>{label}</span>
    </div>
  )
}

function ProjectImage({ src }) {
  return (
    <div className="project-video" style={{ background: 'transparent', border: 'none' }}>
      <img src={encodeURIComponent(src).replace(/%2F/g, '/')} alt="" style={{ width: '100%', display: 'block', borderRadius: 6 }} />
    </div>
  )
}

function renderMedia(m, key) {
  if (m.type === 'video')       return <VideoEmbed key={key} src={m.src} />
  if (m.type === 'image')       return <ProjectImage key={key} src={m.src} />
  if (m.type === 'placeholder') return <ImageSlot key={key} label={m.label} />
  return null
}

function VideoEmbed({ src }) {
  const encoded = encodeURIComponent(src).replace(/%2F/g, '/')
  return (
    <div className="project-video">
      <video autoPlay loop muted playsInline src={encoded} />
    </div>
  )
}

function ProjectSection({ label, children }) {
  return (
    <div className="project-section">
      <span className="project-section-label">{label}</span>
      <div className="project-body">{children}</div>
    </div>
  )
}

function ModeBlock({ feeling, thinking, isFeeling }) {
  return (
    <div className="mode-wrapper">
      <p className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>{feeling}</p>
      <p className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>{thinking}</p>
    </div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const { isFeeling } = useTheme()
  const project = getProject(slug)
  const { prev, next } = getAdjacentProjects(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <main style={{ paddingTop: 120 }}>
        <div className="container">
          <Link to="/" className="project-back">← back</Link>
          <p style={{ color: 'var(--secondary)' }}>Project not found.</p>
        </div>
      </main>
    )
  }

  const meta = project.company || project.role

  return (
    <main style={{ paddingTop: 100, paddingBottom: 0 }}>
      <div className="container">
        <Link to="/" className="project-back" data-cursor-label="go">
          ← back
        </Link>

        {/* Header */}
        <div className="project-header">
          <div className="work-tags" style={{ marginBottom: 16 }}>
            {project.tags.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(24px, 5vw, 38px)',
              marginBottom: 8,
              lineHeight: 1.2,
              transition: 'color var(--t)',
            }}
          >
            {project.title}
          </h1>

          <p className="project-company">{meta} · {project.year}</p>

          {/* Hook — only for projects without custom sections */}
          {!project.sections && project.feeling?.hook && (
            <div className="mode-wrapper" style={{ marginTop: 20 }}>
              <p className={`project-hook mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
                {project.feeling.hook}
              </p>
              <p className={`project-hook mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
                {project.thinking.hook}
              </p>
            </div>
          )}
        </div>

        {/* Custom sections (e.g. Spiti) */}
        {project.sections ? (
          project.sections.map((s, i) => (
            <ProjectSection key={i} label={s.label}>
              {Array.isArray(s.media)
                ? s.media.map((m, j) => renderMedia(m, j))
                : s.media && renderMedia(s.media)}
              <ModeBlock feeling={s.feeling} thinking={s.thinking} isFeeling={isFeeling} />
            </ProjectSection>
          ))
        ) : (
          <>
            <ImageSlot label="Hero / overview image" />

            <ProjectSection label="context">
              <ModeBlock feeling={project.feeling.context} thinking={project.thinking.context} isFeeling={isFeeling} />
            </ProjectSection>

            <ProjectSection label="the problem">
              <ModeBlock feeling={project.feeling.problem} thinking={project.thinking.problem} isFeeling={isFeeling} />
            </ProjectSection>

            <ImageSlot label="Process / research image" />

            <ProjectSection label="process">
              <ModeBlock feeling={project.feeling.process} thinking={project.thinking.process} isFeeling={isFeeling} />
            </ProjectSection>

            <ImageSlot label="Design exploration / wireframes" />
            <ImageSlot label="Final screens" />

            <ProjectSection label="outcome">
              <ModeBlock feeling={project.feeling.outcome} thinking={project.thinking.outcome} isFeeling={isFeeling} />
            </ProjectSection>

            <ProjectSection label="what I learned">
              <ModeBlock feeling={project.feeling.learned} thinking={project.thinking.learned} isFeeling={isFeeling} />
            </ProjectSection>
          </>
        )}

        {/* Prev / Next nav */}
        <div className="project-nav">
          {prev ? (
            <Link to={`/work/${prev.slug}`} data-cursor-label="go">
              ← {prev.title}
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/work/${next.slug}`} data-cursor-label="go">
              {next.title} →
            </Link>
          ) : <span />}
        </div>
      </div>

      <Footer />
    </main>
  )
}
