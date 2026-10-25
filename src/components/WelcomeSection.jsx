import { Heart } from 'lucide-react'
import { loveContent } from '../data/loveContent'
import FloralSpray from './FloralSpray'
import FloatingPetals from './FloatingPetals'
import GiftCard from './GiftCard'
import Ornament from './Ornament'
import styles from './WelcomeSection.module.css'

const { welcome } = loveContent

function Heading() {
  const { heading, headingAccent } = welcome
  const accentIndex = headingAccent ? heading.indexOf(headingAccent) : -1

  if (accentIndex === -1) return heading

  return (
    <>
      {heading.slice(0, accentIndex)}
      <em>{headingAccent}</em>
      {heading.slice(accentIndex + headingAccent.length)}
    </>
  )
}

export default function WelcomeSection() {
  return (
    <section className={styles.hero} aria-labelledby="welcome-heading">
      <FloatingPetals />
      <FloralSpray className={styles.floralLeft} />
      <FloralSpray className={styles.floralRight} />

      <div className={styles.inner}>
        <div className={styles.heartBadge} aria-hidden="true">
          <Heart />
        </div>

        <p className={`eyebrow ${styles.eyebrow}`}>{welcome.eyebrow}</p>

        <h1 id="welcome-heading" className={styles.title}>
          <Heading />
        </h1>

        <p className={styles.description}>{welcome.description}</p>

        <Ornament className={styles.ornament} />

        <div className={styles.cards}>
          {welcome.cards.map((card) => (
            <GiftCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
