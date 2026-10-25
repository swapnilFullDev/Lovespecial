import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ContentIcon } from './icons'
import styles from './GiftCard.module.css'

export default function GiftCard({ card }) {
  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <span className={styles.icon} aria-hidden="true">
          <ContentIcon name={card.icon} />
        </span>
        <span className={styles.chapter}>{card.chapter}</span>
      </div>

      <div className={styles.copy}>
        <h2 className={styles.title}>{card.title}</h2>
        <p className={styles.subtitle}>{card.subtitle}</p>
      </div>

      <span className={styles.rule} aria-hidden="true" />

      <Link to={card.to} className={`btn btn-ghost ${styles.cta}`}>
        {card.buttonLabel}
        <ArrowRight aria-hidden="true" />
      </Link>
    </article>
  )
}
