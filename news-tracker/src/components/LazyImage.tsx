import React, {useState} from 'react'
import LazyLoad from 'react-lazyload'
import {ILazyImageProps} from "../types/types.ts"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const LazyImage: React.FC<ILazyImageProps> = ({src, alt, className, width, height}) => {
    const [isLoaded, setIsLoaded] = useState(false)

    return (
        <LazyLoad>
            <div style={{alignItems: "center", display: "flex"}}>
                {!isLoaded &&
                    <Skeleton height={height} width={width}/>}
                <img
                    className={className}
                    src={src}
                    alt={alt}
                    onLoad={() => setIsLoaded(true)}
                    style={isLoaded ? {} : {display: 'none'}}
                />
            </div>
        </LazyLoad>
    )
}
