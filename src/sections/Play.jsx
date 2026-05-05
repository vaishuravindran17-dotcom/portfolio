import { useTheme } from '../context/ThemeContext'

const thinkingRows = [
  { label: 'daily',   items: ['Wordle', 'Hardword', 'LinkedIn games', 'Matiks'] },
  { label: 'offline', items: ['board games', 'Lego'] },
  { label: 'health',  items: ['walking', 'qigong (learning)', 'time in nature'] },
  { label: 'someday', items: ['design a board game from scratch', 'build a stationery business'] },
]

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
        <span className="section-label">when not working</span>

        <div className="mode-wrapper">
          {/* ── Feeling ── */}
          <div className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            <p className="play-body">
              Puzzle games, in order: Wordle, Hardword, LinkedIn games, Matiks.
              Board games when there are people around. Lego when there aren&rsquo;t.
            </p>
            <p className="play-body">
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
                  <span className="activity-label">{row.label}</span>
                  <span className="activity-items">
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
