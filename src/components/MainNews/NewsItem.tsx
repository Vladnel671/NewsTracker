import React from 'react'

import styles from '../../styles/main.module.scss'
import { NewsData } from '../../types/types'
import { NewsImage } from '../ui/shared/NewsImage'

const NewsItem: React.FC<{ newsItem: NewsData }> = ({ newsItem }) => (
  <div>
    <hr className={styles['horizontal-rule']} />
    <a
      draggable={false}
      className={styles['news-link']}
      target="_blank"
      rel="noopener noreferrer"
    >
      <article className={styles['list-item-block']}>
        <div className={styles['list-img-block']}>
          <NewsImage src={newsItem.urlToImage} alt={newsItem.title} />
        </div>
        <span draggable={false} className={styles['list-text']}>
          {newsItem.title}
        </span>
      </article>
    </a>
  </div>
)

export default NewsItem
