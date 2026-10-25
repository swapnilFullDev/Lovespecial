import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { loveContent } from './data/loveContent'
import LoveLetterSection from './components/LoveLetterSection'
import PromiseSection from './components/PromiseSection'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'
import WelcomeSection from './components/WelcomeSection'

const { ui, meta } = loveContent

const pageTitles = {
  '/': meta.homeTitle,
  '/promises': meta.promisesTitle,
  '/letter': meta.letterTitle,
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = pageTitles[pathname] ?? meta.siteTitle
  }, [pathname])

  return null
}

export default function App() {
  // The site uses hash routing, so a normal "#main-content" link would be
  // read as a route. Move focus directly instead.
  const skipToContent = (event) => {
    event.preventDefault()
    const main = document.getElementById('main-content')
    main?.focus()
    main?.scrollIntoView({ block: 'start' })
  }

  return (
    <div className="app-shell">
      <a
        className="skip-link"
        href="#main-content"
        onClick={skipToContent}
      >
        {ui.skipToContent}
      </a>

      <SiteHeader />

      <main id="main-content" className="app-main" tabIndex={-1}>
        <ScrollToTop />
        <PageTitle />
        <Routes>
          <Route path="/" element={<WelcomeSection />} />
          <Route path="/promises" element={<PromiseSection />} />
          <Route path="/letter" element={<LoveLetterSection />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <SiteFooter />

      <div className="grain" aria-hidden="true" />
    </div>
  )
}
