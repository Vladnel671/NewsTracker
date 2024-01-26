import React from 'react'
import styles from '../styles/main.module.scss'
import {LazyImage} from "./LazyImage.tsx"
import {motion} from "framer-motion"
import {INewsData} from "../types/types.ts"
import {formatDate} from "../constant"

const AllNewsItem: React.FC<{ news: INewsData, isLoading: boolean }> = ({news}) => {

    const {source, publishedAt, title, urlToImage, author, description, url} = news

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 3}}>
            <article className={styles.newsContainer} key={title}>
                <a draggable={false} className={styles.allNewsLink} href={url} target="_blank"
                   rel='noopener noreferrer'>
                    {urlToImage &&
                        <div className={styles.newsPictureContainer}>
                            <LazyImage src={urlToImage}
                                       alt={title}
                                       height='180px'
                                       width='360px'/>
                        </div>}
                </a>
                <div className={styles.sourceNamePublishedBlock}>
                    <div className={styles.publishedAt}>
                        <h4 className={styles.source}>{source?.name}</h4>
                        <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
                    </div>
                </div>
                <span className={styles.titleBlock}>{title}</span>

                {description && <span className={styles.descriptionBlock}>{description}</span>}
                {author && <span className={styles.AuthorBlock}>Author: {author}</span>}
            </article>
        </motion.div>
    )
};

export default AllNewsItem