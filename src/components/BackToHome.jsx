import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

/** Consistent way back to the welcome screen. */
export default function BackToHome({ label, className = '' }) {
  return (
    <Link to="/" className={`back-link ${className}`}>
      <ArrowLeft aria-hidden="true" />
      {label}
    </Link>
  )
}
