import { ContentIcon } from './icons'
import styles from './PromiseCard.module.css'

export default function PromiseCard({ promise, index }) {
  return (
    <li
      className={styles.card}
      style={{ '--stagger': `${index * 85}ms` }}
    >
      <div className={styles.marker} aria-hidden="true">
        <span className={styles.icon}>
          <ContentIcon name={promise.icon} />
        </span>
        <span className={styles.number}>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <p className={styles.text}>{promise.text}</p>
    </li>
  )
}
