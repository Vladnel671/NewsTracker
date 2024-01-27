import React from 'react'
import styles from '../styles/main.module.scss'
import {LazyImage} from "./shared/lazyImage/LazyImage.tsx"
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
                                       alt={title}/>
                        </div>}

                    <span className={styles.titleBlock}>{title}</span>
                </a>
                <div className={styles.allNewsItemText}>
                    {description && <span className={styles.descriptionBlock}>{description}</span>}
                    <div className={styles.sourceNamePublishedBlock}>
                        <h4 className={styles.source}>{source?.name}{author &&
                            <span className={styles.AuthorBlock}>,&nbsp;{author}</span>}</h4>
                        <time className={styles.publishedAt} dateTime={publishedAt}>{formatDate(publishedAt)}</time>
                    </div>
                </div>

            </article>
        </motion.div>
    )
};

export default AllNewsItem