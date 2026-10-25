/**
 * ─────────────────────────────────────────────────────────────
 *  GIFT TIMING
 *  The reveal moment comes from environment variables so the
 *  development and production builds can be tested separately.
 *
 *  VITE_GIFT_REVEAL_AT must be an ISO 8601 timestamp WITH an
 *  explicit UTC offset, for example:
 *    2026-10-29T22:00:00+05:30
 *
 *  VITE_GIFT_TIME_ZONE controls how that moment is displayed,
 *  for example: Asia/Kolkata
 * ─────────────────────────────────────────────────────────────
 */

const DEFAULT_REVEAL_AT = '2026-10-29T22:00:00+05:30'
const DEFAULT_TIME_ZONE = 'Asia/Kolkata'

const env = import.meta.env ?? {}

/** ISO timestamps without a timezone are ambiguous, so reject them. */
const HAS_UTC_OFFSET = /(?:Z|[+-]\d{2}:?\d{2})$/i

function cleanValue(value) {
  if (typeof value !== 'string') return ''
  return value.trim().replace(/^['"]|['"]$/g, '')
}

function parseRevealAt(value) {
  const cleaned = cleanValue(value)

  if (!cleaned || !HAS_UTC_OFFSET.test(cleaned)) return null

  const timestamp = Date.parse(cleaned)
  return Number.isFinite(timestamp) ? timestamp : null
}

function isValidTimeZone(value) {
  const cleaned = cleanValue(value)
  if (!cleaned) return false

  try {
    new Intl.DateTimeFormat('en-IN', { timeZone: cleaned }).format()
    return true
  } catch {
    return false
  }
}

function timeZoneLabel(timeZone, timestamp) {
  if (timeZone === 'Asia/Kolkata' || timeZone === 'Asia/Calcutta') {
    return 'IST'
  }

  try {
    const parts = new Intl.DateTimeFormat('en-IN', {
      timeZone,
      timeZoneName: 'short',
    }).formatToParts(new Date(timestamp))

    return (
      parts.find((part) => part.type === 'timeZoneName')?.value ?? timeZone
    )
  } catch {
    return timeZone
  }
}

/**
 * Formats the reveal moment in the configured display timezone,
 * e.g. "29 October 2026 · 10:00 PM IST". The viewer's own device
 * timezone is never used for this label.
 */
export function formatRevealDate(timestamp, timeZone) {
  try {
    const parts = new Intl.DateTimeFormat('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone,
    }).formatToParts(new Date(timestamp))

    const pick = (type) =>
      parts.find((part) => part.type === type)?.value ?? ''

    const day = pick('day')
    const month = pick('month')
    const year = pick('year')
    const hour = pick('hour')
    const minute = pick('minute')
    const period = pick('dayPeriod').toUpperCase()
    const zone = timeZoneLabel(timeZone, timestamp)

    return `${day} ${month} ${year} · ${hour}:${minute} ${period} ${zone}`
  } catch {
    return ''
  }
}

const configuredTarget = parseRevealAt(env.VITE_GIFT_REVEAL_AT)
const configuredTimeZone = cleanValue(env.VITE_GIFT_TIME_ZONE)

const revealAtMs = configuredTarget ?? parseRevealAt(DEFAULT_REVEAL_AT)

const timeZone = isValidTimeZone(configuredTimeZone)
  ? configuredTimeZone
  : DEFAULT_TIME_ZONE

export const giftConfig = {
  /** Absolute moment the gift opens, in milliseconds since the epoch. */
  revealAtMs,

  /** The timestamp string used by the build, with an explicit offset. */
  revealAt:
    configuredTarget === null ? DEFAULT_REVEAL_AT : cleanValue(env.VITE_GIFT_REVEAL_AT),

  /** IANA timezone used only for displaying the reveal moment. */
  timeZone,

  /** Human-readable reveal moment in the configured timezone. */
  displayDate: formatRevealDate(revealAtMs, timeZone),

  defaultRevealAt: DEFAULT_REVEAL_AT,
  defaultTimeZone: DEFAULT_TIME_ZONE,
}

export default giftConfig
