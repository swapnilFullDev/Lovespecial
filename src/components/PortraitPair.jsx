import { loveContent } from '../data/loveContent'
import { publicAsset } from '../utils/publicAsset'
import PhotoFrame from './PhotoFrame'
import styles from './PortraitPair.module.css'

const { images } = loveContent
const portraits = [images.nidhi, images.swapnil]

/**
 * Nidhi and Swapnil's portraits, framed as one quiet pair. They sit just
 * before the envelope so the letter feels personal before it is opened.
 */
export default function PortraitPair() {
  return (
    <section className={styles.section} aria-label={images.pairLabel}>
      <div className={styles.pair}>
        {portraits.map((portrait) => (
          <PhotoFrame
            key={portrait.file}
            className={styles.photo}
            src={publicAsset(portrait.file)}
            alt={portrait.alt}
            caption={portrait.caption}
            fallback={portrait.fallback}
            width={portrait.width}
            height={portrait.height}
          />
        ))}
      </div>
    </section>
  )
}
