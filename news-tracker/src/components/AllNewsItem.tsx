import { motion } from 'framer-motion'
import React from 'react'

import { formatDate } from '../constant'
import styles from '../styles/main.module.scss'
import { INewsData } from '../types/types.ts'

import { NewsImage } from './shared/NewsImage.tsx'

const AllNewsItem: React.FC<{ news: INewsData; isLoading: boolean }> = ({
  news,
}) => {
  const { source, publishedAt, title, urlToImage, author, description, url } =
    news

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 3 }}>
      <article className={styles.newsContainer} key={title}>
        <a
          draggable={false}
          className={styles.newsLink}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {urlToImage && (
            <div className={styles.newsPictureContainer}>
              <NewsImage src={urlToImage} alt={title} />
            </div>
          )}
          <div className={styles.allNewsItemText}>
            <span className={styles.titleBlock}>{title}</span>
            {description && (
              <span className={styles.descriptionBlock}>{description}</span>
            )}
            <div className={styles.sourceNamePublishedBlock}>
              <h4 className={styles.source}>
                {author && (
                  <span className={styles.AuthorBlock}>
                    {author}.&nbsp;{source?.name}
                  </span>
                )}
              </h4>
              <time className={styles.publishedAt} dateTime={publishedAt}>
                {formatDate(publishedAt)}
              </time>
            </div>
          </div>
        </a>
      </article>
    </motion.div>
  )
}

export default AllNewsItem
