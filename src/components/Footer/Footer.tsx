import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import { GithubIcon } from '@/ui'

export function Footer() {
  return (
    <footer className={styles.footer}>
        <Link to="https://github.com/MAChapurin/fake-store">
          <GithubIcon/>
        </Link>
    </footer>
  )
}
