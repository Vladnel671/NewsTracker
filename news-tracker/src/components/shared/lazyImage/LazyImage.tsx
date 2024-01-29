import React, { useState } from "react"
import LazyLoad from "react-lazyload"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import styles from "../../../styles/main.module.scss"
import { ILazyImageProps } from "../../../types/types.ts"

export const LazyImage: React.FC<ILazyImageProps> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const imageStyles = isLoaded ? {} : { display: "none" }
  const skeletonStyles = isLoaded ? { width: "100%", height: "max-content" } : {}

  return (
    <LazyLoad style={skeletonStyles}>
      {isLoaded ? (
        src && (
          <img
            className={`${styles.newsImage} ${styles.imageHoverEffect}`}
            draggable={false}
            src={src}
            alt={alt}
            onLoad={() => setIsLoaded(true)}
            style={imageStyles}
          />
        )
      ) : (
        <Skeleton style={{ width: "100%", height: "max-content" }} />
      )}
    </LazyLoad>
  )
}
