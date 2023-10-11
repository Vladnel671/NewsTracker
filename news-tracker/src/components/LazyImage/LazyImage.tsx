import React from 'react';
import LazyLoad from 'react-lazyload';
import styles from "../../App.module.scss";

interface ILazyImageProps {
    src: string;
    alt: string;
    key: string;
}

export const LazyImage: React.FC<ILazyImageProps> = ({ src, alt, key }) => {
    return (
        <LazyLoad>
            <img className={styles.newsPicture} src={src} alt={alt} key={key} />
        </LazyLoad>
    );
};

