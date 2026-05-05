import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import Footer from '../components/Footer'

const SECTIONS = [
  {
    id: 'design',
    feeling: 'I design.',
    thinking: 'Graphic Design',
    pieces: [
      {
        src: '/play/design-01-card-deck.jpg',
        caption: 'A deck of cards. Geometric, gold, a little obsessive.',
        style: { width: '55%', marginLeft: '0%', transform: 'rotate(-1.2deg)' },
      },
      {
        src: '/play/design-02-card-faces.jpg',
        caption: 'Face cards with no faces. Just triangles.',
        style: { width: '48%', marginLeft: '38%', transform: 'rotate(0.6deg)' },
      },
      {
        src: '/play/design-03-paper-plane-card.jpg',
        caption: 'Business card for a Pondicherry studio. Dark and precise.',
        style: { width: '52%', marginLeft: '12%', transform: 'rotate(-0.4deg)' },
      },
      {
        src: '/play/design-04-simple-bake-bag.jpg',
        caption: 'Packaging that feels like it has a personality.',
        style: { width: '60%', marginLeft: '25%', transform: 'rotate(1deg)' },
      },
      {
        src: '/play/design-05-siya-weaves.jpg',
        caption: 'Brand identity for a weaves label. Quiet and considered.',
        style: { width: '50%', marginLeft: '5%', transform: 'rotate(-0.8deg)' },
      },
      {
        src: '/play/design-06-couple-editors.jpg',
        caption: 'Logo for an editorial duo. Caps and planes.',
        style: { width: '44%', marginLeft: '45%', transform: 'rotate(1.5deg)' },
      },
    ],
  },
  {
    id: 'illus',
    feeling: 'I illustrate.',
    thinking: 'Illustration',
    pieces: [
      {
        src: '/play/illus-01-house-sunset.jpg',
        caption: 'A house and its mirror. Pink sky, dark water.',
        style: { width: '58%', marginLeft: '0%', transform: 'rotate(-1deg)' },
      },
      {
        src: '/play/illus-02-neighbourhood.jpg',
        caption: 'A street that works. Everyone moving, nobody rushing.',
        style: { width: '52%', marginLeft: '35%', transform: 'rotate(0.4deg)' },
      },
      {
        src: '/play/illus-03-birdseye-map.jpg',
        caption: 'A city from above. Grey roads, orange life.',
        style: { width: '64%', marginLeft: '8%', transform: 'rotate(-0.6deg)' },
      },
      {
        src: '/play/illus-04-astronaut.jpg',
        caption: "A lost soul with a sign. Made for Spiti's error page.",
        style: { width: '46%', marginLeft: '42%', transform: 'rotate(1.2deg)' },
      },
      {
        src: '/play/illus-05-jigsaw.jpg',
        caption: 'The same harbour, taken apart.',
        style: { width: '55%', marginLeft: '15%', transform: 'rotate(-0.3deg)' },
      },
    ],
  },
  {
    id: 'paint',
    feeling: 'I paint.',
    thinking: 'Painting',
    pieces: [
      {
        src: '/play/paint-01-forest-stream.jpg',
        caption: 'Green and water. Painted with whatever was on the knife.',
        style: { width: '62%', marginLeft: '0%', transform: 'rotate(-0.5deg)' },
      },
      {
        src: '/play/paint-02-figure.jpg',
        caption: "Something heavy. Didn't plan it, just painted until it felt right.",
        style: { width: '48%', marginLeft: '40%', transform: 'rotate(0.8deg)' },
      },
      {
        src: '/play/paint-03-popcorn.jpg',
        caption: 'Movies are just life with better lighting.',
        style: { width: '56%', marginLeft: '12%', transform: 'rotate(-1.4deg)' },
      },
      {
        src: '/play/paint-04-ocean-waves.jpg',
        caption: 'Just water. Over and over until it looked like it felt.',
        style: { width: '70%', marginLeft: '0%', transform: 'rotate(0.3deg)' },
      },
      {
        src: '/play/paint-05-mountain.jpg',
        caption: "A landscape made of triangles. The designer couldn't stay away.",
        style: { width: '52%', marginLeft: '32%', transform: 'rotate(-0.7deg)' },
      },
    ],
  },
  {
    id: 'mini',
    feeling: 'Mini projects.',
    thinking: 'Side Projects',
    pieces: [
      {
        src: '/play/mini-01-girl-garden.jpg',
        caption: 'Personal. Made for a day I needed to hear it myself.',
        style: { width: '55%', marginLeft: '5%', transform: 'rotate(-1deg)' },
      },
      {
        src: '/play/mini-02-quote-cards.jpg',
        caption: 'Made for Unorthobox — a stationery brand. Same girl, different mornings.',
        style: { width: '50%', marginLeft: '38%', transform: 'rotate(0.5deg)' },
      },
      {
        src: '/play/mini-03-fisherman.jpg',
        caption: 'An afternoon scene. Warm light, no hurry.',
        style: { width: '62%', marginLeft: '10%', transform: 'rotate(-0.4deg)' },
      },
      {
        src: '/play/mini-04-girl-balloons.jpg',
        caption: 'Made for a competition. She won.',
        style: { width: '48%', marginLeft: '42%', transform: 'rotate(1.2deg)' },
      },
      {
        src: '/play/mini-05-beach.jpg',
        caption: 'From above, everything looks exactly where it should be.',
        style: { width: '65%', marginLeft: '0%', transform: 'rotate(-0.3deg)' },
      },
    ],
  },
]

export default function PlayPage() {
  const { isFeeling } = useTheme()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="play-page">
      <div className="container">
        <Link to="/" className="project-back" data-cursor-label="go">
          &larr; back
        </Link>

        <h1 className="play-heading">
          I draw. I sketch. I paint.<br />
          I illustrate. I design.
        </h1>
        <p className="play-sub">
          Things I made with no brief and no client.<br />
          Adding as I go. Some finished, most not.
        </p>

        {SECTIONS.map(sec => (
          <div key={sec.id} className="play-section">
            <h2 className="play-section-label">
              {isFeeling ? sec.feeling : sec.thinking}
            </h2>
            <div className="play-scatter">
              {sec.pieces.map((p, i) => (
                <div
                  key={i}
                  className="play-piece"
                  data-cursor-label="look"
                  style={p.style}
                >
                  <div className="play-piece-img">
                    <img src={p.src} alt="" loading="lazy" />
                  </div>
                  <p className="play-piece-caption">{p.caption}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  )
}
