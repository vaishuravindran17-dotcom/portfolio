import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Resume',   href: 'https://drive.google.com/file/d/1J3ckLCdyfoTQFY47uVWYJ0U9PL9t53Im/view?usp=sharing', attrs: { target: '_blank', rel: 'noopener noreferrer' } },
  { label: 'Email',    href: 'mailto:vaishuravindran17@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vaishali-ravindran-6295b520a/',      attrs: { target: '_blank', rel: 'noopener noreferrer' } },
  { label: 'Behance',  href: 'https://www.behance.net/vaishalravindr1/projects',               attrs: { target: '_blank', rel: 'noopener noreferrer' } },
  { label: 'Medium',   href: 'https://medium.com/@vaishuravindran17',                          attrs: { target: '_blank', rel: 'noopener noreferrer' } },
]

export default function Footer() {
  const { isFeeling } = useTheme()

  return (
    <footer className="footer section" data-zone="footer" data-cursor-label="say hi">
      <div className="container">
        <div className="footer-links" style={{ marginTop: 0 }}>
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

        {!isFeeling && (
          <p className="footer-note">
            Made late at night in Chennai. [Song on repeat this month]. Forgot to drink anything again.
          </p>
        )}
      </div>
    </footer>
  )
}
