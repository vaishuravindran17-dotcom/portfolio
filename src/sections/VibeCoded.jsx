import { useTheme } from '../context/ThemeContext'

const vibeProjects = [
  {
    name: 'Deduce',
    what: '8 puzzle games in one place. Logic, deduction, the satisfaction of figuring something out.',
    why: 'I kept looking for exactly this and nobody had made it.',
    status: 'in progress',
    link: null,
  },
]

export default function VibeCoded() {
  const { isFeeling } = useTheme()

  return (
    <section
      className="section"
      data-zone="vibe-coded"
      data-zone-label="built this"
    >
      <div className="container">
        <span className="section-label">built at odd hours</span>

        <div style={{ marginBottom: 28 }} className="mode-wrapper">
          <p
            className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}
            style={{ fontSize: 15, lineHeight: 1.75 }}
          >
            I get ideas faster than I can build them. Deduce is the first one I actually started.
            Eight puzzle games, because I kept looking for exactly this and nobody had made it.
          </p>
          <p
            className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}
            style={{ fontSize: 15, lineHeight: 1.75 }}
          >
            Side projects built independently. Currently: Deduce &mdash; a collection of 8 logic and
            deduction puzzle games. In progress. Built because the thing I wanted didn&rsquo;t exist.
          </p>
        </div>

        <div className="vibe-list">
          {vibeProjects.map((p) => (
            <div key={p.name} className="vibe-item" data-cursor-label="built this">
              <p className="vibe-name">{p.name}</p>
              <p className="vibe-what">{p.what}</p>
              <p className="vibe-why">{p.why}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span className="vibe-status">{p.status}</span>
                {p.link && (
                  <a
                    href={p.link}
                    style={{ fontSize: 13, color: 'var(--accent)' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-label="go"
                  >
                    visit &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
