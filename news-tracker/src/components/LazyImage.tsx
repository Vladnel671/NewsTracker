import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import Skeleton from 'react-loading-skeleton'
import {ILazyImageProps} from "../types/types.ts"
import 'react-loading-skeleton/dist/skeleton.css'

export const LazyImage: React.FC<ILazyImageProps> = ({src, alt, className}) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        isLoading ?
            <Skeleton style={{height: '100%', width: '100%'}}/> :
            <LazyLoad>
                <img
                    className={className}
                    src={src}
                    alt={alt}
                />
            </LazyLoad>
    );
};
