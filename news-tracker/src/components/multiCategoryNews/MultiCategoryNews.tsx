import React from 'react'
import styles from '../../styles/main.module.scss'
import { INewsState } from '../../types/types.ts'
import { NewsImage } from '../shared/NewsImage.tsx'

const MultiCategoryNews: React.FC<INewsState> = React.memo(({ news }) => (
  <section className={styles.multiNewsBlock}>
    <div className={styles.multiNews}>
      <h3 className={styles.newsCategoryName}>BUSINESS</h3>
      <article>
        <a
          draggable={false}
          className={styles.newsLink}
          href={news[0]?.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.multiNewsImgWrapper}>
            <NewsImage src={news[0]?.urlToImage} alt={news[0]?.title} />
          </div>
          <h3 draggable={false} className={styles.mainNewsTitle}>
            {news[0]?.title}
          </h3>
        </a>
      </article>
      <hr className={styles.horizontalRule} />
      {news.slice(1, 4).map((news, index) => (
        <article className={styles.multiNewsListItem} key={index}>
          <a
            draggable={false}
            key={index}
            className={styles.newsLink}
            href={news?.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span draggable={false} className={styles.newsText}>
              {news?.title}
            </span>
          </a>
          <hr className={styles.horizontalRule} />
        </article>
      ))}
    </div>
    <div className={styles.multiNews}>
      <h3 className={styles.newsCategoryName}>SCIENCE</h3>
      <article>
        <a
          draggable={false}
          className={styles.newsLink}
          href={news[1]?.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.multiNewsImgWrapper}>
            <NewsImage src={news[1]?.urlToImage} alt={news[1]?.title} />
          </div>
          <h3 draggable={false} className={styles.mainNewsTitle}>
            {news[1]?.title}
          </h3>
        </a>
      </article>
      <hr className={styles.horizontalRule} />
      {news.slice(4, 7).map((news, index) => (
        <article className={styles.multiNewsListItem} key={index}>
          <a
            draggable={false}
            key={index}
            className={styles.newsLink}
            href={news?.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span draggable={false} className={styles.newsText}>
              {news?.title}
            </span>
            <hr className={styles.horizontalRule} />
          </a>
        </article>
      ))}
    </div>
    <div className={styles.multiNews}>
      <h3 className={styles.newsCategoryName}>LIFESTYLE</h3>
      <article>
        <a
          draggable={false}
          className={styles.newsLink}
          href={news[3]?.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.multiNewsImgWrapper}>
            <NewsImage src={news[3]?.urlToImage} alt={news[3]?.title} />
          </div>
          <h3 draggable={false} className={styles.mainNewsTitle}>
            {news[3]?.title}
          </h3>
          <hr className={styles.horizontalRule} />
        </a>
      </article>

      {news.slice(2, 5).map((news, index) => (
        <article className={styles.multiNewsListItem} key={index}>
          <a
            draggable={false}
            key={index}
            className={styles.newsLink}
            href={news?.url}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span draggable={false} className={styles.newsText}>
              {news?.title}
            </span>
            <hr className={styles.horizontalRule} />
          </a>
        </article>
      ))}
    </div>
  </section>
))

export default MultiCategoryNews
