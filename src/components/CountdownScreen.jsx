import { loveContent } from '../data/loveContent'
import { giftConfig } from '../config/gift'
import FloatingPetals from './FloatingPetals'
import styles from './CountdownScreen.module.css'

const { countdown } = loveContent

function CountdownUnit({ value, label }) {
  return (
    <div className={styles.unit}>
      <span className={styles.value}>{String(value).padStart(2, '0')}</span>
      <span className={styles.label}>{label}</span>
    </div>
  )
}

export default function CountdownScreen({ timeLeft }) {
  const units = [
    { key: 'days', value: timeLeft.days, label: countdown.labels.days },
    { key: 'hours', value: timeLeft.hours, label: countdown.labels.hours },
    { key: 'minutes', value: timeLeft.minutes, label: countdown.labels.minutes },
    { key: 'seconds', value: timeLeft.seconds, label: countdown.labels.seconds },
  ]

  return (
    <section className={styles.screen} aria-labelledby="countdown-heading">
      <div className={styles.sky} aria-hidden="true">
        <span className={styles.stars} />
        <span className={`${styles.star} ${styles.starOne}`} />
        <span className={`${styles.star} ${styles.starTwo}`} />
        <span className={`${styles.star} ${styles.starThree}`} />
        <span className={`${styles.star} ${styles.starFour}`} />

        <svg
          className={styles.moon}
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.5 8.2a28.5 28.5 0 1 0 14.3 45.9A30.2 30.2 0 0 1 49.5 8.2Z"
            fill="url(#countdown-moon-glow)"
          />
          <defs>
            <linearGradient
              id="countdown-moon-glow"
              x1="20"
              y1="8"
              x2="56"
              y2="62"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f7e8c8" />
              <stop offset="1" stopColor="#d8b98c" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <FloatingPetals />

      <div className={styles.inner}>
        <p className={styles.kicker}>{countdown.kicker}</p>

        <h1 id="countdown-heading" className={styles.heading}>
          {countdown.heading}
        </h1>

        <p className={styles.description}>{countdown.description}</p>

        <div
          className={styles.timer}
          role="timer"
          aria-label={countdown.ariaLabel}
          aria-live="off"
        >
          {units.map((unit) => (
            <CountdownUnit
              key={unit.key}
              value={unit.value}
              label={unit.label}
            />
          ))}
        </div>

        {giftConfig.displayDate && (
          <p className={styles.date}>
            <span className={styles.dateLabel}>{countdown.dateLabel}</span>
            <span className={styles.dateValue}>{giftConfig.displayDate}</span>
          </p>
        )}

        <p className={styles.note}>{countdown.note}</p>
        <p className={styles.footer}>{countdown.footer}</p>
      </div>
    </section>
  )
}
