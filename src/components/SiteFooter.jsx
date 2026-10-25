import { loveContent } from '../data/loveContent'
import Ornament from './Ornament'
import styles from './SiteFooter.module.css'

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Ornament className={styles.ornament} />
        <p className={styles.message}>{loveContent.footer.message}</p>
      </div>
    </footer>
  )
}
