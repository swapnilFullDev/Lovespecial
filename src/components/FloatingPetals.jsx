import styles from './FloatingPetals.module.css'

// Deterministic values keep the drifting petals calm and repeatable.
const petals = [
  { left: '6%', size: 9, delay: 0, duration: 26, tone: 'blush', opacity: 0.4 },
  { left: '16%', size: 6, delay: 7, duration: 31, tone: 'gold', opacity: 0.32 },
  { left: '27%', size: 11, delay: 3, duration: 28, tone: 'blush', opacity: 0.28 },
  { left: '38%', size: 7, delay: 12, duration: 34, tone: 'gold', opacity: 0.35 },
  { left: '48%', size: 5, delay: 5, duration: 24, tone: 'blush', opacity: 0.4 },
  { left: '57%', size: 10, delay: 15, duration: 30, tone: 'gold', opacity: 0.26 },
  { left: '67%', size: 7, delay: 9, duration: 27, tone: 'blush', opacity: 0.34 },
  { left: '76%', size: 12, delay: 2, duration: 33, tone: 'blush', opacity: 0.24 },
  { left: '84%', size: 6, delay: 18, duration: 29, tone: 'gold', opacity: 0.34 },
  { left: '92%', size: 9, delay: 11, duration: 25, tone: 'blush', opacity: 0.3 },
]

export default function FloatingPetals() {
  return (
    <div className={styles.field} aria-hidden="true">
      {petals.map((petal, index) => (
        <span
          key={index}
          className={`${styles.petal} ${styles[petal.tone]}`}
          style={{
            left: petal.left,
            '--size': `${petal.size}px`,
            '--delay': `${petal.delay}s`,
            '--duration': `${petal.duration}s`,
            '--petal-opacity': petal.opacity,
          }}
        />
      ))}
    </div>
  )
}
