import styles from './PageIntro.module.css'

/** The shared editorial header for the two answer sections. */
export default function PageIntro({ label, heading, headingId }) {
  return (
    <header className={styles.intro}>
      <p className="eyebrow">{label}</p>
      <span className={styles.rule} aria-hidden="true" />
      <h1 id={headingId} className={styles.heading}>
        {heading}
      </h1>
    </header>
  )
}
