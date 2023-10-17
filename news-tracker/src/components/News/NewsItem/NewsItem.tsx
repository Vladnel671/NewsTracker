import React from 'react';
import styles from "../../../App.module.css";
import {LazyImage} from "../../LazyImage/LazyImage.tsx";
import {INewsData} from "../../../store/store.ts";

const NewsItem: React.FC<{ news: INewsData }> = ({news}) => {
    return (
        <div className={styles.newsContainer} key={news.title}>
            <a className={styles.newsLink} href={news.url} target="_blank" rel='noopener noreferrer'>
                <div className={styles.sourceNamePublishedBlock}>
                    <h4 className={styles.source}>{news.source.name}</h4>
                    <div className={styles.publishedAt}>
                        {new Date(news.publishedAt).toLocaleString(undefined, {
                            year: 'numeric',
                            month: 'numeric',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                    </div>
                </div>
                <span className={styles.titleBlock}>{news.title}</span>
                {news.urlToImage ? (<div className={styles.newsPictureContainer}>
                    <LazyImage src={news.urlToImage} alt={news.title}/>
                </div>) : null}
            </a>
            {news.author ? (<span className={styles.AuthorBlock}>Author: {news.author}</span>) : null}
            {news.description ? (<span className={styles.descriptionBlock}>{news.description}</span>) : null}
        </div>
    );
};

export default NewsItem;