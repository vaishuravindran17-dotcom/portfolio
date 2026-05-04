import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Resume', href: '#', attrs: { target: '_blank', rel: 'noopener noreferrer' } },
  { label: 'Email', href: 'mailto:hello@vaishaliravindran.com' },
  { label: 'LinkedIn', href: '#', attrs: { target: '_blank', rel: 'noopener noreferrer' } },
  { label: 'Behance', href: '#', attrs: { target: '_blank', rel: 'noopener noreferrer' } },
  { label: 'X', href: '#', attrs: { target: '_blank', rel: 'noopener noreferrer' } },
]

export default function Footer() {
  const { isFeeling } = useTheme()

  return (
    <footer
      className="footer section"
      data-zone="footer"
      data-cursor-label="say hi"
    >
      <div className="container">
        <div className="mode-wrapper">
          <div className={`mode-block ${isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            <p className="footer-name">Vaishali Ravindran &mdash; designing since 2021 &rarr; forever.</p>
            <p className="footer-tagline">
              Made late at night in Chennai. Forgot to drink anything again.
              <br />
              Currently building: Deduce. Also mentoring at Collej &mdash; if you&rsquo;re a design student, say hi.
            </p>
          </div>
          <div className={`mode-block ${!isFeeling ? 'mode-visible' : 'mode-hidden'}`}>
            <p className="footer-name">Vaishali Ravindran &middot; Product Designer &middot; Chennai</p>
            <p className="footer-tagline">
              6 years in B2B and enterprise SaaS &middot; Open to the right problems
            </p>
          </div>
        </div>

        <div className="footer-links" style={{ marginTop: 28 }}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="footer-link"
              data-cursor-label="go"
              {...(l.attrs || {})}
            >
              {l.label}
            </a>
          ))}
        </div>

        <p className="footer-note">
          Made late at night in Chennai. [Song on repeat this month]. Forgot to drink anything again.
        </p>
      </div>
    </footer>
  )
}
