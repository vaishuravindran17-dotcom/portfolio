import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const location = useLocation()
  const isProject = location.pathname.startsWith('/work/')

  return (
    <nav
      className="nav"
      style={{
        backdropFilter: 'blur(10px)',
        background: 'color-mix(in srgb, var(--bg) 88%, transparent)',
      }}
    >
      <div className="nav-inner">
        <Link to="/" className="nav-name" data-cursor-label="go">
          Vaishali Ravindran
        </Link>

        {!isProject && (
          <ul className="nav-links">
            <li><a href="#work"    data-cursor-label="go">work</a></li>
            <li><a href="#play"    data-cursor-label="go">play</a></li>
            <li><a href="#writing" data-cursor-label="go">writing</a></li>
          </ul>
        )}
      </div>
    </nav>
  )
}
