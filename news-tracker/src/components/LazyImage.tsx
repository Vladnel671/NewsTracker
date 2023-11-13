import React, {useState} from 'react';
import LazyLoad from 'react-lazyload';
import styles from '../styles/main.module.scss';
import ContentLoader from "react-content-loader";
import {ILazyImageProps} from "../types/types.ts";

const ImagePlaceholder: React.FC = () => (
    <ContentLoader className={styles.newsPicture}>
        <rect x="0" y="0" rx="3" ry="3" width="100%" height="100%"/>
    </ContentLoader>
);
export const LazyImage: React.FC<ILazyImageProps> = ({src, alt, className}) => {

    const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    const imageClass = className ? className : styles.newsPicture;

    return (
        <LazyLoad placeholder={<ImagePlaceholder/>}>
            {!isLoaded && <ImagePlaceholder/>}
            <img
                className={imageClass}
                src={src}
                alt={alt}
                onLoad={handleImageLoad}
                style={{display: isLoaded ? 'block' : 'none'}}
            />
        </LazyLoad>
    );
};


