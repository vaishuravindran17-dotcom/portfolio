import { Link } from 'react-router-dom'

const previews = [
  { src: '/play/design-01-card-deck.jpg',    alt: 'Playing card deck'         },
  { src: '/play/illus-01-house-sunset.jpg',  alt: 'House at sunset'           },
  { src: '/play/paint-04-ocean-waves.jpg',   alt: 'Ocean waves'               },
  { src: '/play/mini-04-girl-balloons.jpg',  alt: 'Girl with balloons'        },
]

export default function ArtTrials() {
  return (
    <section className="section" data-zone="art-trials" id="play">
      <div className="container">
        <span className="section-label">play</span>

        <div className="art-preview">
          {previews.map((p, i) => (
            <div key={i} className={`art-preview-item art-preview-item--${i + 1}`} data-cursor-label="look">
              <img src={p.src} alt={p.alt} loading="lazy" />
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
