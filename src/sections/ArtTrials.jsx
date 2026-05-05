import { Link } from 'react-router-dom'

const previews = [
  {
    src: '/play/design-01-card-deck.png',
    alt: 'I design',
    caption: 'A deck of cards. Geometric, gold, a little obsessive.',
  },
  {
    src: '/play/illus-01-house-sunset.jpg',
    alt: 'I illustrate',
    caption: 'A house and its mirror. Pink sky, dark water.',
  },
  {
    src: '/play/paint-04-ocean-waves.jpg',
    alt: 'I paint',
    caption: 'Just water. Over and over until it looked like it felt.',
  },
  {
    src: '/play/mini-04-girl-balloons.jpg',
    alt: 'I collaborate',
    caption: 'Made for a competition. She won.',
  },
]

export default function ArtTrials() {
  return (
    <section className="section" data-zone="art-trials" id="play">
      <div className="container">
        <span className="section-label">play</span>

        <p className="art-preview-sub">
          Things I made with no brief and no client.<br />
          Adding as I go. Some finished, many not.
        </p>

        <div className="art-preview">
          <div className="art-preview-col art-preview-col--left">
            {[previews[0], previews[2]].map((p, i) => (
              <div key={i} className={`art-preview-item art-preview-item--${i === 0 ? 1 : 3}`} data-cursor-label="look">
                <img src={p.src} alt={p.alt} loading="lazy" />
                <p className="art-preview-caption">{p.caption}</p>
              </div>
            ))}
          </div>
          <div className="art-preview-col art-preview-col--right">
            {[previews[1], previews[3]].map((p, i) => (
              <div key={i} className={`art-preview-item art-preview-item--${i === 0 ? 2 : 4}`} data-cursor-label="look">
                <img src={p.src} alt={p.alt} loading="lazy" />
                <p className="art-preview-caption">{p.caption}</p>
              </div>
            ))}
          </div>
        </div>

        <Link to="/play" className="art-cta" data-cursor-label="look">
          see all &rarr;
        </Link>
      </div>
    </section>
  )
}
