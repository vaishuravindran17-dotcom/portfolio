import { useTheme } from '../context/ThemeContext'

const essays = [
  {
    title: 'The street as a design document',
    excerpt: 'What KNK Road taught me about user flows and unannounced design.',
    date: 'Nov 2024',
    href: 'https://medium.com/@vaishuravindran17',
  },
  {
    title: 'On complexity as material',
    excerpt: 'Why B2B design might be the hardest and most interesting thing to do well.',
    date: 'Sep 2024',
    href: 'https://medium.com/@vaishuravindran17',
  },
  {
    title: 'The question I couldn\'t answer',
    excerpt: 'A student at Collej asked me something. I\'ve been thinking about it since.',
    date: 'Jul 2024',
    href: 'https://medium.com/@vaishuravindran17',
  },
  {
    title: 'Designing without the user',
    excerpt: 'On the fundamental impossibility we keep attempting anyway.',
    date: 'Apr 2024',
    href: 'https://medium.com/@vaishuravindran17',
  },
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

        <div className="mode-wrapper" style={{ marginBottom: 28 }}>
          <p className={`mode-block writing-body ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            My essays aren&rsquo;t always about design. They&rsquo;re about things I&rsquo;ve been thinking about &mdash;
            places, people, how things work. Design is downstream of everything else you notice.
          </p>
          <p className={`mode-block writing-body ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            Writing in two places &mdash; essays here, design and product thinking on LinkedIn.
            Both feed the same curiosity.
          </p>
        </div>

        <div className="essay-list">
          {essays.map((e) => (
            <a
              key={e.title}
              href={e.href}
              className="essay-card"
              data-cursor-label="read"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="essay-image" aria-hidden="true" />
              <div className="essay-body">
                <p className="essay-title">{e.title}</p>
                <p className="essay-excerpt">{e.excerpt}</p>
                <span className="essay-date">{e.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
