import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const pieces = [
  { date: 'Jan 2024', caption: 'Something I kept coming back to.' },
  { date: 'Mar 2024', caption: 'Made in an afternoon. Not finished.' },
  { date: 'Jun 2024', caption: 'An experiment with colour I didn\'t expect.' },
  { date: 'Aug 2024', caption: 'Observation from a long walk.' },
]

export default function ArtTrials() {
  const { isFeeling } = useTheme()

  return (
    <section
      className="section"
      data-zone="art-trials"
      data-zone-label="look"
    >
      <div className="container">
        <span className="section-label">play</span>

        <div style={{ marginBottom: 24 }} className="mode-wrapper">
          <p
            className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}
            style={{ fontSize: 15, lineHeight: 1.75 }}
          >
            Things I made with no brief and no client. Adding as I go. Some finished, most not.
          </p>
          <p
            className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}
            style={{ fontSize: 15, lineHeight: 1.75 }}
          >
            A running collection of visual work outside of product design &mdash; drawings, paintings,
            digital experiments. Dated. No titles.
          </p>
        </div>

        <div className="art-grid">
          {pieces.map((item, i) => (
            <div key={i} className="art-item" data-cursor-label="look">
              <div className="art-placeholder" />
              <div className="art-meta">
                <span className="art-date">{item.date}</span>
                <p className="art-caption">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/play" className="art-cta" data-cursor-label="look">
          see all &rarr;
        </Link>
      </div>
    </section>
  )
}
