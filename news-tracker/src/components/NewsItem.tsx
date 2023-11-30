import React from 'react'
import styles from '../styles/main.module.scss'
import {LazyImage} from "./LazyImage.tsx"
import {motion} from "framer-motion"
import {INewsData} from "../types/types.ts"
import {formatDate} from "../constant"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const NewsItem: React.FC<{ news: INewsData, isLoading: boolean }> = ({news, isLoading}) => {

    const {source, publishedAt, title, urlToImage, author, description, url} = news

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
                    {isLoading ? (
                        <Skeleton style={{ height: '150px', marginTop: '5px' }} />
                    ) : (
                        urlToImage && (
                            <div className={styles.newsPictureContainer}>
                                <LazyImage className={styles.newsPicture} src={urlToImage} alt={title} />
                            </div>
                        )
                    )}
                </a>
                {author && <span className={styles.AuthorBlock}>Author: {author}</span>}
                {description && <span className={styles.descriptionBlock}>{description}</span>}
            </div>
        </motion.div>
    )
};

export default NewsItem