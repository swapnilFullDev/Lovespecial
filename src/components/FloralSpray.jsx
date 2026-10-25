import styles from './FloralSpray.module.css'

/**
 * Delicate line-art botanicals for the corners of the welcome section.
 * Purely decorative, so it is hidden from assistive technology.
 */
export default function FloralSpray({ className = '' }) {
  return (
    <svg
      className={`${styles.spray} ${className}`}
      viewBox="0 0 220 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <path d="M116 322c-5-58-13-101-29-139-15-36-25-70-18-108" />
        <path d="M102 233c-22-12-44-12-64 3" />
        <path d="M94 196c18-14 24-33 21-55" />
        <path d="M83 157c-18-6-32-21-38-40" />
        <path d="M75 120c15-5 26-18 30-34" />

        <path d="M88 205c-12-17-31-25-50-21 8 17 29 27 50 21Z" fill="currentColor" fillOpacity="0.07" />
        <path d="M39 236c18-10 39-7 53 7-17 9-39 6-53-7Z" fill="currentColor" fillOpacity="0.07" />
        <path d="M94 195c5-19 20-31 39-33-3 19-19 33-39 33Z" fill="currentColor" fillOpacity="0.07" />
        <path d="M76 121c-8-19-4-40 10-53 9 18 5 40-10 53Z" fill="currentColor" fillOpacity="0.07" />
        <path d="M108 176c2-18 14-32 31-38 0 18-13 34-31 38Z" fill="currentColor" fillOpacity="0.07" />
        <path d="M58 133c-16-7-26-22-27-40 17 5 28 22 27 40Z" fill="currentColor" fillOpacity="0.07" />

        <path d="M69 76c0-11 6-20 15-26" />
        <path d="M69 76c-11 0-20-5-26-14" />
      </g>

      {/* Small blossoms */}
      <g fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="0.9">
        <path d="M69 43c4-10 13-15 23-14-1 10-9 18-19 19-2 0-4-2-4-5Z" />
        <path d="M69 43c-6-9-4-19 3-26 7 7 8 18 3 26-2 3-5 2-6 0Z" />
        <path d="M69 43c-10-3-17-11-18-21 10 0 19 7 22 17 1 3-2 5-4 4Z" />
        <path d="M69 43c-1 10 4 19 13 23 4-9 0-19-8-25-2-2-5 0-5 2Z" />
        <path d="M69 43c9 5 19 4 26-3-7-7-18-8-26-3-3 2-2 5 0 6Z" />
        <circle cx="69" cy="43" r="2.2" fill="currentColor" fillOpacity="0.5" stroke="none" />
      </g>
      <g fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="0.9">
        <path d="M151 62c3-8 10-12 18-11-1 8-7 14-15 15-2 0-3-2-3-4Z" />
        <path d="M151 62c-5-7-3-15 2-21 6 6 7 15 3 21-1 2-4 2-5 0Z" />
        <path d="M151 62c-8-2-13-9-14-17 8 0 15 6 17 14 1 2-1 4-3 3Z" />
        <path d="M151 62c-1 8 3 15 10 18 3-7 0-15-6-20-2-1-4 0-4 2Z" />
        <path d="M151 62c7 4 15 3 21-2-5-6-14-7-21-3-2 1-1 4 0 5Z" />
        <circle cx="151" cy="62" r="1.8" fill="currentColor" fillOpacity="0.45" stroke="none" />
      </g>
    </svg>
  )
}
