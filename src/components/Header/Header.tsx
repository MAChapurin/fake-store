import { NavLink, useLocation } from 'react-router-dom'

import cn from 'classnames'
import styles from './Header.module.css'

export function Header() {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <NavLink className={cn(styles.link, {
        [styles.activeLink]: location.pathname === '/'
      })} to={'/'}>Products</NavLink>
      <NavLink className={cn(styles.link, {
        [styles.activeLink]: location.pathname === '/favorites'
      })} to={'/favorites'}>Favorites</NavLink>
    </header>
  )
}
