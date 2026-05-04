import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const location = useLocation()
  const isProject = location.pathname.startsWith('/work/')

  return (
    <nav className="nav" style={{ backdropFilter: 'blur(8px)', background: 'color-mix(in srgb, var(--bg) 85%, transparent)' }}>
      <Link
        to="/"
        className="nav-name"
        data-cursor-label="go"
      >
        Vaishali Ravindran
      </Link>

      {!isProject && (
        <ul className="nav-links">
          <li>
            <a href="#work" data-cursor-label="go">work</a>
          </li>
          <li>
            <a href="#writing" data-cursor-label="go">writing</a>
          </li>
          <li>
            <a href="mailto:hello@vaishaliravindran.com" data-cursor-label="say hi">say hi</a>
          </li>
        </ul>
      )}
    </nav>
  )
}
