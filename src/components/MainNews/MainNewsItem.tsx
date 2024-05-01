import React from 'react'

import styles from '../../styles/main.module.scss'
import { NewsData } from '../../types/types'
import { NewsImage } from '../ui/shared/NewsImage'

const MainNewsItem: React.FC<{ newsItem: NewsData }> = ({ newsItem }) => (
  <a
    draggable={false}
    className={styles['news-link']}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={styles['central-news-wrapper']}>
      <div className={styles['central-img-wrapper']}>
        <NewsImage src={newsItem.urlToImage} alt={newsItem.title} />
      </div>
      <span className={styles['central-news-author']}>{newsItem.author}</span>
      <span draggable={false} className={styles['central-text']}>
        {newsItem.title}
      </span>
    </div>
  </a>
)

export default MainNewsItem
