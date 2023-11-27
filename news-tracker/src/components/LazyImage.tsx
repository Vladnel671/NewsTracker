import React from 'react'
import LazyLoad from 'react-lazyload'
import {ILazyImageProps} from "../types/types.ts"

export const LazyImage: React.FC<ILazyImageProps> = ({src, alt, className}) => {
    return (

            <LazyLoad>
                <img
                    className={className}
                    src={src}
                    alt={alt}
                />
            </LazyLoad>
    );
};
