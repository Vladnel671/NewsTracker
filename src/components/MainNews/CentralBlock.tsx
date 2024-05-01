import React from 'react'

import MainNewsItem from './MainNewsItem'
import NewsItem from './NewsItem'
import styles from '../../styles/main.module.scss'
import { NewsData } from '../../types/types'

const CentralBlock: React.FC<{ newsData: NewsData[] }> = ({ newsData }) => (
  <div className={styles['central-block']}>
    <article className={styles.centralNewsBlock}>
      <MainNewsItem newsItem={newsData[0]} />
    </article>
    <div className={styles['central-list-news-block']}>
      {newsData.slice(1, 3).map((newsItem, index) => (
        <NewsItem key={index} newsItem={newsItem} />
      ))}
    </div>
  </div>
)

export default CentralBlock
