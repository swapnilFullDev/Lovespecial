import { useCallback, useEffect, useRef, useState } from 'react'
import { giftConfig } from '../config/gift'
import { loveContent } from '../data/loveContent'
import useGiftCountdown from '../hooks/useGiftCountdown'
import CountdownScreen from './CountdownScreen'
import GiftRevealAnimation from './GiftRevealAnimation'
import styles from './GiftGate.module.css'

const { meta } = loveContent

const REVEAL_DURATION = 1500
const REDUCED_MOTION_REVEAL_DURATION = 250

export default function GiftGate({ children }) {
  const timeLeft = useGiftCountdown(giftConfig.revealAtMs)

  // A past target is already revealed: start on the reveal screen with
  // the opening button available immediately.
  const [phase, setPhase] = useState(() =>
    Date.now() >= giftConfig.revealAtMs ? 'ready' : 'countdown',
  )

  const headingRef = useRef(null)
  const buttonRef = useRef(null)

  // Move from the countdown to the opening sequence exactly once.
  useEffect(() => {
    if (phase === 'countdown' && timeLeft.isComplete) {
      setPhase('revealing')
    }
  }, [phase, timeLeft.isComplete])

  // Keep the opening sequence short and calm, and make it instant for
  // visitors who prefer reduced motion.
  useEffect(() => {
    if (phase !== 'revealing') return undefined

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const timer = window.setTimeout(
      () => setPhase('ready'),
      reduceMotion
        ? REDUCED_MOTION_REVEAL_DURATION
        : REVEAL_DURATION,
    )

    return () => window.clearTimeout(timer)
  }, [phase])

  // Give each phase its own browser title. Once the site opens, the
  // route-aware PageTitle inside the app takes over.
  useEffect(() => {
    if (phase === 'countdown') {
      document.title = meta.countdownTitle
    } else if (phase === 'revealing' || phase === 'ready') {
      document.title = meta.revealTitle
    }
  }, [phase])

  // Announce the new screen to keyboard and screen-reader users.
  useEffect(() => {
    if (phase === 'revealing') {
      headingRef.current?.focus({ preventScroll: true })
    } else if (phase === 'ready') {
      buttonRef.current?.focus({ preventScroll: true })
    } else if (phase === 'opened') {
      document.getElementById('main-content')?.focus({ preventScroll: true })
    }
  }, [phase])

  const openGift = useCallback(() => {
    setPhase('opened')
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  if (phase === 'countdown') {
    return <CountdownScreen timeLeft={timeLeft} />
  }

  if (phase === 'revealing' || phase === 'ready') {
    return (
      <GiftRevealAnimation
        isReady={phase === 'ready'}
        onOpen={openGift}
        headingRef={headingRef}
        buttonRef={buttonRef}
      />
    )
  }

  return <div className={styles.site}>{children}</div>
}
