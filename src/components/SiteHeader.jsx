import { Heart } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { loveContent } from '../data/loveContent'
import styles from './SiteHeader.module.css'

const { ui } = loveContent

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link
          to="/"
          className={styles.brand}
          aria-label={ui.brandLabel}
        >
          <span className={styles.brandMark} aria-hidden="true">
            <Heart />
          </span>
          <span className={styles.brandText}>{ui.brand}</span>
        </Link>

        <nav className={styles.nav} aria-label={ui.menuLabel}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ''}`
            }
          >
            {ui.home}
          </NavLink>
          <NavLink
            to="/promises"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ''}`
            }
          >
            {ui.promisesNav}
          </NavLink>
          <NavLink
            to="/letter"
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ''}`
            }
          >
            {ui.letterNav}
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
