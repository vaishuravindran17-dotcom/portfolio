import { useTheme } from '../context/ThemeContext'

const essays = [
  // Vaishali to fill in titles, dates, and links
  // { title: 'Essay title here', date: 'Month Year', href: '#' },
]

export default function Writing() {
  const { isFeeling } = useTheme()

  return (
    <section
      id="writing"
      className="section"
      data-zone="writing"
      data-zone-label="read"
    >
      <div className="container">
        <span className="section-label">writing</span>

        <div className="mode-wrapper" style={{ marginBottom: 32 }}>
          <p className={`mode-block writing-body ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            My essays aren't always about design. They're about things I've been thinking about —
            places, people, how things work. I think that's fine. Design is downstream of
            everything else you notice.
          </p>
          <p className={`mode-block writing-body ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            Writing in two places — essays here, design and product thinking on LinkedIn.
            Both feed the same curiosity.
          </p>
        </div>

        {essays.length > 0 ? (
          <div className="writing-list">
            {essays.map((e) => (
              <a
                key={e.title}
                href={e.href}
                className="writing-item"
                data-cursor-label="read"
                target={e.href.startsWith('http') ? '_blank' : undefined}
                rel={e.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span className="writing-title">{e.title}</span>
                <span className="writing-date">{e.date}</span>
              </a>
            ))}
          </div>
        ) : (
          <p className="writing-placeholder">
            Essays coming. In the meantime, design thinking on{' '}
            <a
              href="#"
              style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: 3 }}
              data-cursor-label="go"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
        )}
      </div>
    </section>
  )
}
