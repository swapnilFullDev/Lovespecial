import { loveContent } from '../data/loveContent'
import Ornament from './Ornament'
import styles from './SiteFooter.module.css'

const { footer, romanticMessages } = loveContent

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Ornament className={styles.ornament} />
        <p className={styles.note}>{romanticMessages.footer}</p>
        {/* <p className={styles.message}>{footer.message}</p> */}
      </div>
    </footer>
  )
}
