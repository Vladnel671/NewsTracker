import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import Skeleton from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'
import styles from '../../styles/main.module.scss'
import { INewsImageProps } from '../../types/types.ts'

export const NewsImage: React.FC<INewsImageProps> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const imageStyles = isLoaded ? { display: 'block' } : { display: 'none' }
  const skeletonStyles = isLoaded ? { width: '100%', height: '100%' } : {}

  return (
    <LazyLoad style={skeletonStyles}>
      {src && (
        <>
          <img
            className={`${styles['news-image']} ${styles['image-hover-effect']}`}
            draggable={false}
            src={src}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
            style={imageStyles}
          />
          {!isLoaded && <Skeleton style={{ width: '100%', height: '100%' }} />}
        </>
      )}
    </LazyLoad>
  )
}
