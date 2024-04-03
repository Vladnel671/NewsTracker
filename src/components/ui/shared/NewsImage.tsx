import { Skeleton } from '@mui/material'
import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'

import styles from '../../../styles/main.module.scss'
import { INewsImageProps } from '../../../types/types.ts'

export const NewsImage: React.FC<INewsImageProps> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <LazyLoad style={{ height: '100%' }}>
      <div style={{ position: 'relative', height: '100%' }}>
        <img
          className={`${styles['news-image']} ${styles['image-hover-effect']}`}
          draggable={false}
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
        <Skeleton
          height="100%"
          style={{
            display: isLoaded ? 'none' : 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }}
        />
      </div>
    </LazyLoad>
  )
}
