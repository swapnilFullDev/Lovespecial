import { loveContent } from '../data/loveContent'
import Ornament from './Ornament'
import styles from './KarvaChauth.module.css'

const { karvaChauth } = loveContent

/**
 * A quiet moonlit dream, shown after the letter opens. It is a shared
 * wish about one evening — never an obligation or a second promise.
 */
export default function KarvaChauth() {
  return (
    <section
      className={styles.section}
      aria-labelledby="karva-chauth-heading"
    >
      <div className={styles.sky} aria-hidden="true">
        <svg
          className={styles.moon}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
            fill="url(#karva-moon)"
          />
          <defs>
            <linearGradient
              id="karva-moon"
              x1="6"
              y1="4"
              x2="18"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f6e3bd" />
              <stop offset="1" stopColor="#d8b98c" />
            </linearGradient>
          </defs>
        </svg>

        <span className={`${styles.star} ${styles.starOne}`} />
        <span className={`${styles.star} ${styles.starTwo}`} />
        <span className={`${styles.star} ${styles.starThree}`} />
        <span className={`${styles.star} ${styles.starFour}`} />
        <span className={`${styles.star} ${styles.starFive}`} />
      </div>

      <p className={`eyebrow ${styles.eyebrow}`}>{karvaChauth.eyebrow}</p>

      <h2 id="karva-chauth-heading" className={styles.heading}>
        {karvaChauth.heading}
      </h2>

      <Ornament className={styles.ornament} />

      <div className={styles.body}>
        {karvaChauth.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <p className={styles.handwritten}>{karvaChauth.handwritten}</p>
    </section>
  )
}
