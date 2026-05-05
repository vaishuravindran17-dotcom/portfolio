import { Link } from 'react-router-dom'

const previews = [
  { src: '/play/design-01-card-deck.png', alt: 'I design'      },
  { src: '/play/illus-01-house-sunset.jpg', alt: 'I illustrate' },
  { src: '/play/paint-04-ocean-waves.jpg',  alt: 'I paint'      },
  { src: '/play/mini-04-girl-balloons.jpg', alt: 'I collaborate' },
]

export default function ArtTrials() {
  return (
    <section className="section" data-zone="art-trials" id="play">
      <div className="container">
        <span className="section-label">play</span>

        <div className="art-preview">
          <div className="art-preview-col art-preview-col--left">
            <div className="art-preview-item art-preview-item--1" data-cursor-label="look">
              <img src={previews[0].src} alt={previews[0].alt} loading="lazy" />
            </div>
            <div className="art-preview-item art-preview-item--3" data-cursor-label="look">
              <img src={previews[2].src} alt={previews[2].alt} loading="lazy" />
            </div>
          </div>
          <div className="art-preview-col art-preview-col--right">
            <div className="art-preview-item art-preview-item--2" data-cursor-label="look">
              <img src={previews[1].src} alt={previews[1].alt} loading="lazy" />
            </div>
            <div className="art-preview-item art-preview-item--4" data-cursor-label="look">
              <img src={previews[3].src} alt={previews[3].alt} loading="lazy" />
            </div>
          </div>
        </div>

        <Link to="/play" className="art-cta" data-cursor-label="look">
          see all &rarr;
        </Link>
      </div>
    </section>
  )
}
