import { useTheme } from '../context/ThemeContext'

const thinkingRows = [
  { label: 'daily',   items: ['Wordle', 'Hardword', 'LinkedIn games', 'Matiks'] },
  { label: 'offline', items: ['board games', 'Lego'] },
  { label: 'health',  items: ['walking', 'qigong (learning)', 'time in nature'] },
  { label: 'someday', items: ['design a board game from scratch', 'build a stationery business'] },
]

const LABEL_SPEC    = "element: section-label\nfont: DM Sans · 500\nsize: 10px\ntracking: 0.24em\ntransform: uppercase\ncolor: --label"
const BODY_SPEC     = "element: body-copy\nfont: DM Sans · regular\nsize: 15px\nline-height: 1.8\ncolor: --text"
const ACT_LBL_SPEC  = "element: category-label\nfont: DM Sans · regular\nsize: 11px\ntracking: 0.08em\ncolor: --label"
const ACT_ITEM_SPEC = "element: activity-items\nfont: DM Sans · regular\nsize: 14px\nline-height: 1.6\ncolor: --text"

export default function Play() {
  const { isFeeling } = useTheme()

  return (
    <section
      id="play"
      className="section"
      data-zone="play"
      data-zone-label="plays this"
    >
      <div className="container">
        <span className="section-label" data-design-spec={LABEL_SPEC}>when not working</span>

        <div className="mode-wrapper">
          {/* ── Feeling ── */}
          <div className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            <p className="play-body" data-design-spec={BODY_SPEC}>
              Puzzle games, in order: Wordle, Hardword, LinkedIn games, Matiks.
              Board games when there are people around. Lego when there aren&rsquo;t.
            </p>
            <p className="play-body" data-design-spec={BODY_SPEC}>
              I walk whenever I can. It clears my head &mdash; I think better after.
              A little qigong, slowly. Time outside watching the clouds move.
            </p>
            <div className="play-aside">
              On the list: design a board game from scratch. Build a stationery business.
            </div>
          </div>

          {/* ── Thinking ── */}
          <div className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            <div className="activity-grid">
              {thinkingRows.map(row => (
                <div key={row.label} className="activity-row">
                  <span className="activity-label" data-design-spec={ACT_LBL_SPEC}>{row.label}</span>
                  <span className="activity-items" data-design-spec={ACT_ITEM_SPEC}>
                    {row.items.join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
