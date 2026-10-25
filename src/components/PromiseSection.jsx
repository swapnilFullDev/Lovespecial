import { ArrowLeft, Heart, Quote } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { loveContent } from '../data/loveContent'
import { publicAsset } from '../utils/publicAsset'
import BackToHome from './BackToHome'
import PageIntro from './PageIntro'
import PhotoFrame from './PhotoFrame'
import styles from './PromiseSection.module.css'

const { promise, ui, romanticMessages, images } = loveContent

export default function PromiseSection() {
  const [isRevealed, setIsRevealed] = useState(false)
  const revealedRef = useRef(null)

  // Move focus to the promise once it appears so keyboard and screen
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
        label={promise.eyebrow}
        heading={promise.heading}
        headingId="promise-heading"
      />

      {!isRevealed ? (
        <div className={styles.sealed}>
          <div className={styles.sealMark} aria-hidden="true">
            <Heart />
          </div>
          <p className={styles.intro}>{promise.intro}</p>
          <button
            type="button"
            className="btn btn-primary"
            aria-expanded={isRevealed}
            aria-controls="promise-content"
            onClick={() => setIsRevealed(true)}
          >
            {promise.revealButton}
          </button>
          <p className={styles.hint}>{promise.hint}</p>
        </div>
      ) : (
        <div
          id="promise-content"
          ref={revealedRef}
          className={styles.revealed}
          role="region"
          aria-label={promise.revealedLabel}
          tabIndex={-1}
        >
          <PhotoFrame
            className={styles.handsPhoto}
            src={publicAsset(images.hands.file)}
            alt={images.hands.alt}
            caption={images.hands.caption}
            fallback={images.hands.fallback}
            width={images.hands.width}
            height={images.hands.height}
          />

          <article className={styles.promiseCard}>
            <span className={styles.cardSeal} aria-hidden="true">
              <Heart />
            </span>

            <p className={styles.cardLabel}>{promise.cardLabel}</p>

            <div className={styles.paragraphs}>
              {promise.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* <p className={styles.handwritten}>{promise.handwrittenLine}</p> */}
          </article>

          <p className={styles.promiseNote}>{romanticMessages.promise}</p>

          <figure className={styles.closing}>
            <Quote className={styles.quoteIcon} aria-hidden="true" />
            <div className={styles.closingText}>
              {promise.closingParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            {/* <figcaption className={styles.closingLabel}>
              {promise.closingLabel}
            </figcaption> */}
          </figure>

          <div className={styles.actions}>
            <Link to="/" className="btn btn-ghost">
              <ArrowLeft aria-hidden="true" />
              {promise.backLabel}
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
