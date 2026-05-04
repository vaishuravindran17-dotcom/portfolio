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

function ProjectSection({ label, children }) {
  return (
    <div className="project-section">
      <span className="project-section-label">{label}</span>
      <div className="project-body">{children}</div>
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

  const content = isFeeling ? project.feeling : project.thinking

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
            <span className="tag">{project.year}</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 'clamp(28px, 5vw, 40px)',
              marginBottom: 20,
              lineHeight: 1.2,
              transition: 'color var(--t)',
            }}
          >
            {project.title}
          </h1>

          <div className="mode-wrapper">
            <p className={`project-hook mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
              {project.feeling.hook}
            </p>
            <p className={`project-hook mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
              {project.thinking.hook}
            </p>
          </div>
        </div>

        <ImageSlot label="Hero / overview image" />

        {/* Context */}
        <ProjectSection label="context">
          <div className="mode-wrapper">
            <p className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
              {project.feeling.context}
            </p>
            <p className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
              {project.thinking.context}
            </p>
          </div>
        </ProjectSection>

        {/* Problem */}
        <ProjectSection label="the problem">
          <div className="mode-wrapper">
            <p className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
              {project.feeling.problem}
            </p>
            <p className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
              {project.thinking.problem}
            </p>
          </div>
        </ProjectSection>

        <ImageSlot label="Process / research image" />

        {/* Process */}
        <ProjectSection label="process">
          <div className="mode-wrapper">
            <p className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
              {project.feeling.process}
            </p>
            <p className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
              {project.thinking.process}
            </p>
          </div>
        </ProjectSection>

        <ImageSlot label="Design exploration / wireframes" />
        <ImageSlot label="Final screens" />

        {/* Outcome */}
        <ProjectSection label="outcome">
          <div className="mode-wrapper">
            <p className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
              {project.feeling.outcome}
            </p>
            <p className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
              {project.thinking.outcome}
            </p>
          </div>
        </ProjectSection>

        {/* Learned */}
        <ProjectSection label="what I learned">
          <div className="mode-wrapper">
            <p className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
              {project.feeling.learned}
            </p>
            <p className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
              {project.thinking.learned}
            </p>
          </div>
        </ProjectSection>

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
