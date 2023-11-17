import React, {useState} from 'react'
import LazyLoad from 'react-lazyload'
import ContentLoader from "react-content-loader"
import {ILazyImageProps} from "../types/types.ts"

const ImagePlaceholder: React.FC<{classname?: string}> = ({classname}) => (
    <ContentLoader className={classname}>
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%"/>
    </ContentLoader>
);
export const LazyImage: React.FC<ILazyImageProps> = ({src, alt, className}) => {

    const [isLoaded, setIsLoaded] = useState(false)

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <LazyLoad placeholder={<ImagePlaceholder/>}>
            {!isLoaded && <ImagePlaceholder classname={className}/>}
            <img
                className={className}
                src={src}
                alt={alt}
                onLoad={handleImageLoad}
                style={{display: isLoaded ? 'block' : 'none'}}
            />
        </LazyLoad>
    );
};


