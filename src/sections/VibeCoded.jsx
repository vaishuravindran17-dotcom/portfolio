import { useTheme } from '../context/ThemeContext'

const vibeProjects = [
  {
    name: 'Deduce',
    what: '8 puzzle games in one place. Logic, deduction, the satisfaction of figuring something out.',
    why: 'I kept looking for exactly this and nobody had made it.',
    status: 'in progress',
    link: 'https://deduce-i312.vercel.app?_vercel_share=ewPoQuZzMXkcAJ09F4OY4Wfo0UwXDaHH',
  },
]

const LABEL_SPEC = "element: section-label\nfont: DM Sans · 500\nsize: 10px\ntracking: 0.24em\ntransform: uppercase\ncolor: --label"
const NAME_SPEC  = "element: project-name\nfont: DM Serif Display · 400\nsize: 17px\ncolor: --text"
const WHAT_SPEC  = "element: description\nfont: DM Sans · regular\nsize: 13px\nline-height: 1.6\ncolor: --text"
const WHY_SPEC   = "element: rationale\nfont: DM Sans · italic\nsize: 11px\ncolor: --label"

export default function VibeCoded() {
  const { isFeeling } = useTheme()

  return (
    <section
      className="section"
      data-zone="vibe-coded"
      data-zone-label="built this"
    >
      <div className="container">
        <span className="section-label" data-design-spec={LABEL_SPEC}>built at odd hours</span>

        <div style={{ marginBottom: 24 }} className="mode-wrapper">
          <p className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}
            style={{ fontSize: 15, lineHeight: 1.75 }}>
            I get ideas faster than I build them. These are the ones I actually started.
          </p>
          <p className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}
            style={{ fontSize: 15, lineHeight: 1.75 }}>
            Side projects built independently. Things that didn&rsquo;t exist and should have.
          </p>
        </div>

        <div className="vibe-list">
          {vibeProjects.map((p) => (
            <div key={p.name} className="vibe-item">
              <a
                className="vibe-item-inner"
                href={p.link || undefined}
                target={p.link ? '_blank' : undefined}
                rel={p.link ? 'noopener noreferrer' : undefined}
                data-cursor-label="visit"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="vibe-thumb">
                  <img src="/deduce.jpg" alt="Deduce" />
                </div>
                <div className="vibe-content">
                  <p className="vibe-name" data-design-spec={NAME_SPEC}>{p.name}</p>
                  <p className="vibe-what" data-design-spec={WHAT_SPEC}>{p.what}</p>
                  <p className="vibe-why" data-design-spec={WHY_SPEC}>{p.why}</p>
                  <span className="vibe-status">{p.status}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
