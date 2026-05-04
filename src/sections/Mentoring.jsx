import { useTheme } from '../context/ThemeContext'

export default function Mentoring() {
  const { isFeeling } = useTheme()

  return (
    <section
      className="section"
      data-zone="who"
      data-cursor-label="this is me"
    >
      <div className="container">
        <span className="section-label">mentoring</span>

        <div className="mode-wrapper">
          <div className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            <p className="mentoring-body">
              A student once asked me a question I didn&rsquo;t have a good answer to. I realised
              that was the point &mdash; good critique isn&rsquo;t about having answers. It&rsquo;s about
              making the right questions impossible to ignore.
            </p>
          </div>

          <div className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            <p className="mentoring-body">
              Mentor at Collej since March 2023. Teaching design critique, essentials,
              and interaction design modules to early-stage design students.
            </p>
          </div>
        </div>

        <p className="mentoring-meta">Mentor &middot; Collej &middot; March 2023 &ndash; Present</p>
      </div>
    </section>
  )
}
