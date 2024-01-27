import React, {useState} from 'react'
import LazyLoad from 'react-lazyload'
import {ILazyImageProps} from "../types/types.ts"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from '../styles/main.module.scss'
export const LazyImage: React.FC<ILazyImageProps> = ({src, alt, width, height}) => {
    const [isLoaded, setIsLoaded] = useState(false)

    const imageStyles = isLoaded ? {} : {display: 'none'};

    return (
        <LazyLoad>
            <div style={{alignItems: "center", display: "flex"}}>
                {isLoaded ? null : <Skeleton height={height} width={width}/>}
                {src && (
                    <img
                        className={styles.imageHover}
                        draggable={false}
                        src={src}
                        alt={alt}
                        onLoad={() => setIsLoaded(true)}
                        style={imageStyles}
                    />
                )}
            </div>
        </LazyLoad>
    );

}
