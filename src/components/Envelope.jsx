import { Heart } from 'lucide-react'
import styles from './Envelope.module.css'

/**
 * A purely decorative envelope. In the letter section it is an extra
 * mouse target for the labelled button; in the reveal sequence it is
 * static and opens on its own.
 */
export default function Envelope({
  isOpen,
  onOpen,
  note,
  interactive = true,
  className = '',
}) {
  const canOpen = interactive && !isOpen && typeof onOpen === 'function'

  return (
    <div className={`${styles.wrap} ${className}`}>
      <div
        className={`${styles.envelope} ${isOpen ? styles.open : ''} ${
          interactive ? '' : styles.static
        }`}
        onClick={canOpen ? onOpen : undefined}
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
