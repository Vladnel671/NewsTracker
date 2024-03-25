import React from 'react'

import { NewsImage } from './ui/shared/NewsImage.tsx'
import styles from '../styles/main.module.scss'
import { INewsState } from '../types/types.ts'

const MultiCategoryNews: React.FC<INewsState> = React.memo(({ news }) => (
  <section className={styles['multi-news-block']}>
    <div className={styles['multi-news']}>
      <h3 className={styles['news-category-name']}>BUSINESS</h3>
      <article>
        <a
          draggable={false}
          className={styles['news-link']}
          href={news[0]?.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles['multi-news-img-wrapper']}>
            <NewsImage src={news[0]?.urlToImage} alt={news[0]?.title} />
          </div>
          <h3 draggable={false} className={styles['main-news-title']}>
            {news[0]?.title}
          </h3>
        </a>
      </article>
      <hr className={styles['horizontal-rule']} />
      {news.slice(1, 4).map((news, index) => (
        <article className={styles['multi-news-list-item']} key={index}>
          <a
            draggable={false}
            key={index}
            className={styles['news-link']}
            href={news?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span draggable={false} className={styles['news-text']}>
              {news?.title}
            </span>
          </a>
          <hr className={styles['horizontal-rule']} />
        </article>
      ))}
    </div>
    <div className={styles['multi-news']}>
      <h3 className={styles['news-category-name']}>SCIENCE</h3>
      <article>
        <a
          draggable={false}
          className={styles['news-link']}
          href={news[1]?.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles['multi-news-img-wrapper']}>
            <NewsImage src={news[1]?.urlToImage} alt={news[1]?.title} />
          </div>
          <h3 draggable={false} className={styles['main-news-title']}>
            {news[1]?.title}
          </h3>
        </a>
      </article>
      <hr className={styles['horizontal-rule']} />
      {news.slice(4, 7).map((news, index) => (
        <article className={styles['multi-news-list-item']} key={index}>
          <a
            draggable={false}
            key={index}
            className={styles['news-link']}
            href={news?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span draggable={false} className={styles['news-text']}>
              {news?.title}
            </span>
            <hr className={styles['horizontal-rule']} />
          </a>
        </article>
      ))}
    </div>
    <div className={styles['multi-news']}>
      <h3 className={styles['news-category-name']}>LIFESTYLE</h3>
      <article>
        <a
          draggable={false}
          className={styles['news-link']}
          href={news[3]?.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles['multi-news-img-wrapper']}>
            <NewsImage src={news[3]?.urlToImage} alt={news[3]?.title} />
          </div>
          <h3 draggable={false} className={styles['main-news-title']}>
            {news[3]?.title}
          </h3>
          <hr className={styles['horizontal-rule']} />
        </a>
      </article>

      {news.slice(2, 5).map((news, index) => (
        <article className={styles['multi-news-list-item']} key={index}>
          <a
            draggable={false}
            key={index}
            className={styles['news-link']}
            href={news?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span draggable={false} className={styles['news-text']}>
              {news?.title}
            </span>
            <hr className={styles['horizontal-rule']} />
          </a>
        </article>
      ))}
    </div>
  </section>
))

export default MultiCategoryNews
