import { ArrowLeft, Heart, Quote } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { loveContent } from '../data/loveContent'
import BackToHome from './BackToHome'
import PageIntro from './PageIntro'
import PromiseCard from './PromiseCard'
import styles from './PromiseSection.module.css'

const { promises, ui } = loveContent

export default function PromiseSection() {
  const [isRevealed, setIsRevealed] = useState(false)
  const revealedRef = useRef(null)

  // Move focus to the promises once they appear so keyboard and screen
  // reader users are not left on a button that no longer exists.
  useEffect(() => {
    if (isRevealed) {
      revealedRef.current?.focus({ preventScroll: true })
    }
  }, [isRevealed])

  return (
    <div className="container container-narrow page">
      <div className={styles.topBar}>
        <BackToHome label={ui.backHome} />
      </div>

      <PageIntro
        label={promises.questionLabel}
        heading={promises.heading}
        headingId="promises-heading"
      />

      {!isRevealed ? (
        <div className={styles.sealed}>
          <div className={styles.sealMark} aria-hidden="true">
            <Heart />
          </div>
          <p className={styles.intro}>{promises.intro}</p>
          <button
            type="button"
            className="btn btn-primary"
            aria-expanded={isRevealed}
            aria-controls="promises-content"
            onClick={() => setIsRevealed(true)}
          >
            {promises.revealButton}
          </button>
          <p className={styles.hint}>{promises.hint}</p>
        </div>
      ) : (
        <div
          id="promises-content"
          ref={revealedRef}
          className={styles.revealed}
          role="region"
          aria-label={promises.revealedLabel}
          tabIndex={-1}
        >
          <ol className={styles.list}>
            {promises.items.map((promise, index) => (
              <PromiseCard
                key={promise.id}
                promise={promise}
                index={index}
              />
            ))}
          </ol>

          <figure className={styles.closing}>
            <Quote className={styles.quoteIcon} aria-hidden="true" />
            <blockquote className={styles.closingText}>
              {promises.closingMessage}
            </blockquote>
            <figcaption className={styles.closingLabel}>
              {promises.closingLabel}
            </figcaption>
          </figure>

          <div className={styles.actions}>
            <Link to="/" className="btn btn-ghost">
              <ArrowLeft aria-hidden="true" />
              {promises.backLabel}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
