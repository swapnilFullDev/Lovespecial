import { useEffect, useState } from 'react'
import { loveContent } from '../data/loveContent'
import Envelope from './Envelope'
import FloatingPetals from './FloatingPetals'
import styles from './GiftRevealAnimation.module.css'

const { opening } = loveContent

export default function GiftRevealAnimation({
  isReady,
  onOpen,
  headingRef,
  buttonRef,
}) {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const timer = window.setTimeout(
      () => setIsEnvelopeOpen(true),
      reduceMotion ? 0 : 420,
    )

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <section className={styles.screen} aria-labelledby="reveal-heading">
      <div className={styles.sky} aria-hidden="true">
        <span className={styles.glow} />
        <span className={styles.stars} />
        <span className={`${styles.star} ${styles.starOne}`} />
        <span className={`${styles.star} ${styles.starTwo}`} />
        <span className={`${styles.star} ${styles.starThree}`} />

        <svg
          className={styles.moon}
          viewBox="0 0 72 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.5 8.2a28.5 28.5 0 1 0 14.3 45.9A30.2 30.2 0 0 1 49.5 8.2Z"
            fill="url(#reveal-moon-glow)"
          />
          <defs>
            <linearGradient
              id="reveal-moon-glow"
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
        <p className={styles.intro}>{opening.intro}</p>

        <div className={styles.envelopeStage}>
          <span className={styles.envelopeGlow} aria-hidden="true" />
          <Envelope
            isOpen={isEnvelopeOpen}
            interactive={false}
            note={opening.envelopeNote}
          />
        </div>

        {/* <h1
          id="reveal-heading"
          ref={headingRef}
          tabIndex={-1}
          className={styles.heading}
        >
          {opening.heading}
        </h1> */}

        <p className={styles.message}>{opening.message}</p>
        <p className={styles.line}>{opening.line}</p>
        <p className={styles.signature}>{opening.signature}</p>

        <div className={styles.buttonSlot}>
          {isReady && (
            <button
              ref={buttonRef}
              type="button"
              className={`btn btn-primary ${styles.button}`}
              onClick={onOpen}
            >
              {opening.button}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
