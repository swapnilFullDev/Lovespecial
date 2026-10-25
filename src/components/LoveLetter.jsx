import { Heart } from 'lucide-react'
import { loveContent } from '../data/loveContent'
import Ornament from './Ornament'
import styles from './LoveLetter.module.css'

const { letter } = loveContent

export default function LoveLetter({ letterRef }) {
  return (
    <article
      ref={letterRef}
      className={styles.paper}
      aria-labelledby="letter-greeting"
      tabIndex={-1}
    >
      <Ornament className={styles.ornament} />

      <p id="letter-greeting" className={styles.greeting}>
        {letter.greeting}
      </p>

      <div className={styles.body}>
        {letter.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <p className={styles.closing}>{letter.closing}</p>
      <p className={styles.signature}>{letter.signature}</p>

      <div className={styles.endMark} aria-hidden="true">
        <span />
        <Heart />
        <span />
      </div>
    </article>
  )
}
