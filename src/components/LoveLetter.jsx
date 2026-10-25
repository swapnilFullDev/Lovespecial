import { Heart } from 'lucide-react'
import { loveContent } from '../data/loveContent'
import Ornament from './Ornament'
import styles from './LoveLetter.module.css'

const { loveLetter } = loveContent

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
        {loveLetter.greeting}
      </p>

      <div className={styles.body}>
        {loveLetter.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <p className={styles.closing}>{loveLetter.closing}</p>
      <p className={styles.signature}>{loveLetter.signature}</p>

      <div className={styles.endMark} aria-hidden="true">
        <span />
        <Heart />
        <span />
      </div>
    </article>
  )
}
