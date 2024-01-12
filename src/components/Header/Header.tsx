import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

type IsActiveType = {
  isActive: boolean
}

export function Header() {
  const isActive = ({ isActive }: IsActiveType) => ({ fontWeight: isActive ? 900 : 500 })
  return (
    <header className={styles.header}>
      <NavLink style={isActive} className={styles.link} to={'/'}>Products</NavLink>
      <NavLink style={isActive} className={styles.link} to={'/favorites'}>Favorites</NavLink>
    </header>
  )
}
