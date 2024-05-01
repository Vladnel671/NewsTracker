import React from 'react'

import { NewsImage } from './ui/shared/NewsImage.tsx'
import { formatDate } from '../constants/index.ts'
import styles from '../styles/main.module.scss'
import { INewsData } from '../types/types.ts'

const AllNewsItem: React.FC<{ news: INewsData; isLoading: boolean }> = ({
  news,
}) => {
  const { source, publishedAt, title, urlToImage, author, description } = news

  return (
    <article className={styles['news-container']} key={title}>
      <a
        draggable={false}
        className={styles['news-link']}
        target="_blank"
        rel="noopener noreferrer"
      >
        {urlToImage && (
          <div className={styles['news-picture-container']}>
            <NewsImage src={urlToImage} alt={title} />
          </div>
        )}
        <div className={styles['all-news-item-text']}>
          <span className={styles['title-block']}>{title}</span>
          {description && (
            <span className={styles['description-block']}>{description}</span>
          )}
          <div className={styles['source-name-published-block']}>
            <h4 className={styles.source}>
              {author && (
                <span className={styles['author-block']}>
                  {author}.&nbsp;{source?.name}
                </span>
              )}
            </h4>
            <time className={styles['published-at']} dateTime={publishedAt}>
              {formatDate(publishedAt)}
            </time>
          </div>
        </div>
      </a>
    </article>
  )
}

export default AllNewsItem
