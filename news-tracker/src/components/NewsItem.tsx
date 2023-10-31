import React from 'react';
import styles from '../styles/main.module.scss';
import {LazyImage} from "./LazyImage.tsx";
import {motion} from "framer-motion"
import {INewsData} from "../types/types.ts";

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

const NewsItem: React.FC<{ news: INewsData }> = ({news}) => {

    const {source, publishedAt, title, urlToImage, author, description, url} = news;

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 3}}>
            <div className={styles.newsContainer} key={title}>
                <a className={styles.newsLink} href={url} target="_blank" rel='noopener noreferrer'>
                    <div className={styles.sourceNamePublishedBlock}>
                        <h4 className={styles.source}>{source?.name}</h4>
                        <div className={styles.publishedAt}>
                            {formatDate(publishedAt)}
                        </div>
                    </div>
                    <span className={styles.titleBlock}>{title}</span>
                    {urlToImage && (
                        <div className={styles.newsPictureContainer}>
                            <LazyImage src={urlToImage} alt={title}/>
                        </div>
                    )}
                </a>
                {author && <span className={styles.AuthorBlock}>Author: {author}</span>}
                {description && <span className={styles.descriptionBlock}>{description}</span>}
            </div>
        </motion.div>
    );
};

export default NewsItem;