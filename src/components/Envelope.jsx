import { Heart } from 'lucide-react'
import styles from './Envelope.module.css'

/**
 * A purely decorative envelope. The accessible control is the labelled
 * button rendered beside it in LoveLetterSection; clicking the envelope
 * is an extra delight for mouse users.
 */
export default function Envelope({ isOpen, onOpen, note }) {
  return (
    <div className={styles.wrap}>
      <div
        className={`${styles.envelope} ${isOpen ? styles.open : ''}`}
        onClick={isOpen ? undefined : onOpen}
        aria-hidden="true"
      >
        <div className={styles.back} />

        <div className={styles.peek}>
          <span className={styles.peekLine} />
          <span className={styles.peekLine} />
          <span className={`${styles.peekLine} ${styles.short}`} />
          <Heart className={styles.peekHeart} />
        </div>

        <div className={styles.pocket}>
          <span className={styles.address}>{note}</span>
        </div>

        <div className={styles.flap}>
          <span className={styles.flapTriangle} />
          <span className={styles.seal}>
            <Heart />
          </span>
        </div>
      </div>
    </div>
  )
}
