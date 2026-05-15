import { NavLink } from 'react-router-dom'
import './SiteNav.css'

const NAV_ITEMS = [
  { to: '/', label: 'Components' },
  { to: '/docs', label: 'Documentation' },
  { to: '/releases', label: 'Releases' },
]

export default function SiteNav() {
  return (
    <nav className="site-nav">
      <ul className="site-nav__list">
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
