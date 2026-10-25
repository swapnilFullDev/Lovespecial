import { useEffect, useState } from 'react'

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

/**
 * Derives every countdown unit from the absolute target on each tick.
 * Nothing is decremented, so a throttled or paused tab cannot cause
 * accumulated timing drift.
 */
export function getTimeLeft(targetMs, nowMs = Date.now()) {
  const safeTarget = Number.isFinite(targetMs) ? targetMs : 0
  const remainingMs = Math.max(0, safeTarget - nowMs)

  // Round up so "1" is visible until the final millisecond has passed.
  const totalSeconds = Math.ceil(remainingMs / SECOND)
  const daySeconds = DAY / SECOND
  const hourSeconds = HOUR / SECOND
  const minuteSeconds = MINUTE / SECOND

  return {
    remainingMs,
    isComplete: remainingMs <= 0,
    days: Math.floor(totalSeconds / daySeconds),
    hours: Math.floor((totalSeconds % daySeconds) / hourSeconds),
    minutes: Math.floor((totalSeconds % hourSeconds) / minuteSeconds),
    seconds: totalSeconds % minuteSeconds,
  }
}

/**
 * A live countdown to an absolute timestamp.
 *
 * - Recalculates from Date.now() on every tick.
 * - Uses one interval at a time, even if visibility/focus events overlap.
 * - Stops the interval when the target is reached or the tab is hidden.
 * - Re-syncs immediately when the tab becomes visible or focused again.
 * - Cleans up listeners and timers on unmount.
 */
export default function useGiftCountdown(targetMs) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetMs))

  useEffect(() => {
    let intervalId = null
    let cancelled = false

    const stopInterval = () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId)
        intervalId = null
      }
    }

    const update = () => {
      if (cancelled) return

      const next = getTimeLeft(targetMs)

      setTimeLeft((previous) =>
        previous.remainingMs === next.remainingMs ? previous : next,
      )

      if (next.isComplete) stopInterval()
    }

    const sync = () => {
      if (cancelled) return

      stopInterval()
      update()

      if (!cancelled && !getTimeLeft(targetMs).isComplete) {
        intervalId = window.setInterval(update, SECOND)
      }
    }

    const handleVisibility = () => {
      if (document.visibilityState === 'hidden') {
        stopInterval()
        return
      }

      sync()
    }

    sync()

    document.addEventListener('visibilitychange', handleVisibility)
    window.addEventListener('focus', sync)
    window.addEventListener('pageshow', sync)

    return () => {
      cancelled = true
      stopInterval()
      document.removeEventListener('visibilitychange', handleVisibility)
      window.removeEventListener('focus', sync)
      window.removeEventListener('pageshow', sync)
    }
  }, [targetMs])

  return timeLeft
}
