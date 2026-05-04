import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from '../components/Footer'

const allPieces = [
  { date: 'Jan 2024', caption: 'Something I kept coming back to.' },
  { date: 'Mar 2024', caption: 'Made in an afternoon. Not finished.' },
  { date: 'Jun 2024', caption: 'An experiment with colour I didn\'t expect.' },
  { date: 'Aug 2024', caption: 'Observation from a long walk.' },
  { date: 'Oct 2024', caption: 'Still not sure what this is.' },
  { date: 'Dec 2024', caption: 'The beginning of something.' },
  { date: 'Feb 2025', caption: 'A failed attempt that felt right.' },
  { date: 'Apr 2025', caption: 'Returning to the same subject.' },
]

export default function PlayPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ paddingTop: 80 }}>
      <div className="container" style={{ paddingTop: 40 }}>
        <Link to="/" className="project-back" data-cursor-label="go">
          &larr; back
        </Link>

        <span className="section-label" style={{ marginBottom: 8 }}>play</span>
        <p style={{ fontSize: 15, lineHeight: 1.75, marginBottom: 36, color: 'var(--text)', opacity: 0.8 }}>
          Things I made with no brief and no client. Adding as I go. Some finished, most not.
        </p>

        <div className="art-grid">
          {allPieces.map((item, i) => (
            <div key={i} className="art-item" data-cursor-label="look">
              <div className="art-placeholder" />
              <div className="art-meta">
                <span className="art-date">{item.date}</span>
                <p className="art-caption">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
