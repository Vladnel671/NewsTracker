import React from 'react';
import styles from "../../../App.module.css";
import {LazyImage} from "../../LazyImage/LazyImage.tsx";
import {INewsData} from "../../../store/store.ts";

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

    const { source, publishedAt, title, urlToImage, author, description, url } = news;

    return (
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
                        <LazyImage src={urlToImage} alt={title} />
                    </div>
                )}
            </a>
            {author && <span className={styles.AuthorBlock}>Author: {author}</span>}
            {description && <span className={styles.descriptionBlock}>{description}</span>}
        </div>
    );
};

export default NewsItem;