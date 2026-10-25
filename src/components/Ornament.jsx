import styles from './Ornament.module.css'

/** A quiet gold divider used to separate thoughts. */
export default function Ornament({ className = '' }) {
  return (
    <div className={`${styles.ornament} ${className}`} aria-hidden="true">
      <span className={styles.line} />
      <svg
        className={styles.mark}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3.5c1.9 3.7 4.1 5.9 7.8 7.8-3.7 1.9-5.9 4.1-7.8 7.8-1.9-3.7-4.1-5.9-7.8-7.8 3.7-1.9 5.9-4.1 7.8-7.8Z"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="11.3" r="1.3" fill="currentColor" />
      </svg>
      <span className={styles.line} />
    </div>
  )
}
