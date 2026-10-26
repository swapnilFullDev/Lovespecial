import { ArrowLeft } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { loveContent } from '../data/loveContent'
import BackToHome from './BackToHome'
import Envelope from './Envelope'
import KarvaChauth from './KarvaChauth'
import LoveLetter from './LoveLetter'
import PageIntro from './PageIntro'
import PortraitPair from './PortraitPair'
import styles from './LoveLetterSection.module.css'

const { loveLetter, ui, romanticMessages } = loveContent

export default function LoveLetterSection() {
  const [isOpen, setIsOpen] = useState(false)
  const letterRef = useRef(null)
  const scrollTimer = useRef(null)

  const openLetter = useCallback(() => {
    setIsOpen(true)
  }, [])

  // Give the envelope a moment to open, then bring the letter into view.
  useEffect(() => {
    if (!isOpen) return undefined

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    // Move focus to the letter immediately so assistive technology follows
    // the new content; only the visual scroll waits for the envelope.
    letterRef.current?.focus({ preventScroll: true })

    scrollTimer.current = window.setTimeout(
      () => {
        letterRef.current?.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start',
        })
      },
      reduceMotion ? 60 : 780,
    )

    return () => {
      window.clearTimeout(scrollTimer.current)
    }
  }, [isOpen])

  return (
    <div className="container container-narrow page">
      <div className={styles.topBar}>
        <BackToHome label={ui.backHome} />
      </div>

      <PageIntro
        label={loveLetter.eyebrow}
        // heading={loveLetter.heading}
        headingId="letter-heading"
      />

      <h2 className={styles.letterTitle}>{loveLetter.title}</h2>
      <p className={styles.letterSubtitle}>{loveLetter.subtitle}</p>

      <PortraitPair />

      <div className={styles.stage}>
        <Envelope
          isOpen={isOpen}
          onOpen={openLetter}
          note={loveLetter.envelopeNote}
        />

        {!isOpen && (
          <button
            type="button"
            className={`btn btn-primary ${styles.openButton}`}
            onClick={openLetter}
            aria-expanded={isOpen}
            aria-controls="love-letter"
          >
            {loveLetter.openButton}
          </button>
        )}

        {/* <p className={styles.hint} role="status">
          {isOpen ? loveLetter.openedNote : loveLetter.sealHint}
        </p> */}
      </div>

      {isOpen && (
        <>
          <div id="love-letter">
            <LoveLetter letterRef={letterRef} />
          </div>

          <p className={styles.letterNote}>{romanticMessages.letter}</p>

          <KarvaChauth />
        </>
      )}

      <div className={styles.actions}>
        <Link to="/" className="btn btn-ghost">
          <ArrowLeft aria-hidden="true" />
          {loveLetter.backLabel}
        </Link>
      </div>
    </div>
  )
}
