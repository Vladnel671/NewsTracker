import React from 'react'

import MainNewsItem from './MainNewsItem.tsx'
import NewsItem from './NewsItem.tsx'
import styles from '../../styles/main.module.scss'
import { NewsData } from '../../types/types.ts'

const SideBlock: React.FC<{ newsData: NewsData[] }> = ({ newsData }) => (
  <div className={styles['side-block']}>
    <article className={styles['side-column-main-news-block']}>
      <MainNewsItem newsItem={newsData[0]} />
    </article>
    <div className={styles['side-list-news-block']}>
      {newsData.slice(1, 4).map((newsItem, index) => (
        <NewsItem key={index} newsItem={newsItem} />
      ))}
    </div>
  </div>
)

export default SideBlock
