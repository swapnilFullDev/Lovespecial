import { Heart } from 'lucide-react'
import { useState } from 'react'
import styles from './PhotoFrame.module.css'

/**
 * A framed photograph with an editable caption.
 *
 * All three source photos are close to 3:4, so the frame reserves that
 * shape and lets `object-fit: cover` handle the negligible difference.
 * If a file is ever renamed or missing, a soft heart fallback appears
 * instead of a broken-image icon.
 */
export default function PhotoFrame({
  src,
  alt,
  caption,
  fallback,
  width,
  height,
  priority = false,
  className = '',
}) {
  const [hasFailed, setHasFailed] = useState(false)
  const frameClass = className ? `${styles.frame} ${className}` : styles.frame

  return (
    <figure className={frameClass}>
      <div className={styles.media}>
        {hasFailed ? (
          <div className={styles.fallback} role="img" aria-label={alt}>
            <Heart aria-hidden="true" />
            <p className={styles.fallbackText}>{fallback || alt}</p>
          </div>
        ) : (
          <img
            className={styles.image}
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setHasFailed(true)}
          />
        )}
      </div>

      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}
