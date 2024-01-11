import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <button>Товары</button>
      <button>Избранное</button>
    </header>
  )
}
