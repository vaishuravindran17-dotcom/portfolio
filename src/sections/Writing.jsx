import { useTheme } from '../context/ThemeContext'

const essays = [
  {
    title: '#ItIsNotWorthIt',
    subtitle: 'Architecture (in India) is not worth it. At least, not in the majority of colleges. This isn\'t a rant for attention — it\'s something I\'ve been wanting to say for a long time.',
    date: 'Dec 2025',
    href: 'https://www.linkedin.com/posts/vaishali-ravindran-6295b520a_itisnotworthit-architecture-itsnotworthit-share-7386461433821114368-K5l6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADUgPEEBYxpVFdT6YkxW-KBY-D-7BYGts1g',
    img: '/writing/writing-01-architecture.jpg',
  },
  {
    title: 'B2B SaaS vs. Enterprise SaaS: Lessons from my transition',
    subtitle: 'Having worked in B2B SaaS for three years, switching to Enterprise SaaS was eye-opening.',
    date: 'May 2025',
    href: 'https://www.linkedin.com/posts/vaishali-ravindran-6295b520a_productdesigner-b2bsaas-enterprisesaas-activity-7265378455658065921-7Qbr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADUgPEEBYxpVFdT6YkxW-KBY-D-7BYGts1g',
    img: '/writing/writing-02-b2b-saas.jpg',
  },
  {
    title: 'Fleeting people, Fleeting moments',
    subtitle: 'Today, as I bid farewell to a colleague who\'s not just leaving the company, but also heading back to his home state, I found myself sitting quietly in my room, thinking about fleeting people.',
    date: 'May 2025',
    href: 'https://medium.com/@vaishuravindran17/fleeting-people-fleeting-moments-0d36c0fe1b5b',
    img: '/writing/writing-03-fleeting.jpg',
  },
  {
    title: 'Discovering stories beyond my world',
    subtitle: 'One of my favourite things about living in Bengaluru is the chance to meet people from such diverse backgrounds — even for someone like me who rarely steps out.',
    date: 'Jun 2025',
    href: 'https://medium.com/@vaishuravindran17/discovering-stories-beyond-my-world-35fa7a7e701c',
    img: '/writing/writing-04-stories.jpg',
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
        <span className="section-label" data-design-spec={"element: section-label\nfont: DM Sans · 500\nsize: 10px\ntracking: 0.24em\ntransform: uppercase\ncolor: --label"}>writing</span>

        <div className="mode-wrapper" style={{ marginBottom: 24 }}>
          <p className={`mode-block writing-body ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            My essays aren&rsquo;t always about design. They&rsquo;re about things I&rsquo;ve been
            thinking about &mdash; places, people, how things work. Design is downstream of
            everything else you notice.
          </p>
          <p className={`mode-block writing-body ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            Writing in two places &mdash; essays on Medium, design and product thinking on LinkedIn.
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
              <div className="essay-thumb" aria-hidden="true">
                <img src={e.img} alt="" loading="lazy" />
              </div>
              <div className="essay-body">
                <p className="essay-title" data-design-spec={"element: essay-title\nfont: DM Sans · 500\nsize: 14px\nline-height: 1.4\ncolor: --text"}>{e.title}</p>
                <p className="essay-subtitle" data-design-spec={"element: subtitle\nfont: DM Sans · regular\nsize: 11px\nline-height: 1.55\ncolor: --secondary"}>{e.subtitle}</p>
                <span className="essay-date" data-design-spec={"element: date\nfont: DM Sans · regular\nsize: 10px\ntracking: 0.04em\ncolor: --label"}>{e.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
