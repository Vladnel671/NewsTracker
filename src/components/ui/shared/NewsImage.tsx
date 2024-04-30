import { Skeleton } from '@mui/material'
import React from 'react'
import { useInView } from 'react-intersection-observer'

import styles from '../../../styles/main.module.scss'
import { INewsImageProps } from '../../../types/types.ts'

export const NewsImage: React.FC<INewsImageProps> = ({ src, alt }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <div ref={ref}>
      {inView ? (
        <img
          draggable="false"
          className={`${styles['news-image']} ${styles['image-hover-effect']}`}
          src={src}
          alt={alt}
        />
      ) : (
        <Skeleton
          style={{ position: 'absolute', height: '100%', width: '100%' }}
        />
      )}
    </div>
  )
}
