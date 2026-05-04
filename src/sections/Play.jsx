import { useTheme } from '../context/ThemeContext'

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
          <div className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            <p className="play-body">
              I play a lot of puzzle games. Not because I&rsquo;m competitive &mdash; because I like the
              feeling of a problem that has exactly one right answer. Wordle every morning.
              Then Hardword. Then whatever LinkedIn has. Then Matiks. Board games when there
              are people around. Lego when there aren&rsquo;t.
            </p>
            <div className="play-aside">
              One unfulfilled thing: I want to design a board game from scratch. Someday.
              <br />
              Another: build a stationery business. Also someday.
            </div>
          </div>

          <div className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            <p className="play-body">
              Daily: Wordle &rarr; Hardword &rarr; LinkedIn games &rarr; Matiks.
              Offline: board games, Lego.
            </p>
            <div className="play-aside">
              On the to-do list (the real one): design a board game from scratch,
              build a stationery business.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
