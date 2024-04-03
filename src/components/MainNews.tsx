import React from 'react'

import { NewsImage } from './ui/shared/NewsImage.tsx'
import { regex } from '../constants/index.ts'
import styles from '../styles/main.module.scss'
import { IMainNewsBlockProps } from '../types/types.ts'

const MainNews: React.FC<IMainNewsBlockProps> = React.memo(
  ({ firstColumnNews, secondColumnNews, thirdColumnNews }) => (
    <section className={styles['main-news-block']}>
      <div className={styles['side-block']}>
        <article className={styles['side-column-main-news-block']}>
          <a
            draggable={false}
            className={styles['news-link']}
            href={firstColumnNews[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles['side-img-wrapper']}>
              <NewsImage
                src={firstColumnNews[0]?.urlToImage}
                alt={firstColumnNews[0]?.title}
              />
            </div>
            <span
              draggable={false}
              className={styles['side-column-main-news-text']}
            >
              {firstColumnNews[0]?.title}
            </span>
          </a>
        </article>
        <div className={styles['side-list-news-block']}>
          {firstColumnNews.slice(1, 4).map((newsItem, index) => (
            <div key={index}>
              <hr className={styles['horizontal-rule']} />
              <a
                draggable={false}
                className={styles['news-link']}
                href={newsItem?.url}
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
          ))}
        </div>
      </div>
      <div className={styles['central-block']}>
        <article className={styles.centralNewsBlock}>
          <a
            draggable={false}
            className={styles['news-link']}
            href={secondColumnNews[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles['central-news-wrapper']}>
              <div className={styles['central-img-wrapper']}>
                <NewsImage
                  src={secondColumnNews[0]?.urlToImage}
                  alt={secondColumnNews[0]?.title}
                />
              </div>
              <span className={styles['central-news-author']}>
                {secondColumnNews[0]?.author
                  ? secondColumnNews[0].author.replace(regex, '$1')
                  : ''}
              </span>
              <span draggable={false} className={styles['central-text']}>
                {secondColumnNews[0]?.title}
              </span>
            </div>
          </a>
        </article>
        <div className={styles['central-list-news-block']}>
          {secondColumnNews.slice(1, 3).map((newsItem, index) => (
            <div key={index}>
              <hr className={styles['horizontal-rule']} />
              <a
                draggable={false}
                className={styles['news-link']}
                href={newsItem?.url}
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
          ))}
        </div>
      </div>
      <div className={styles['side-block']}>
        <article className={styles['side-column-main-news-block']}>
          <a
            draggable={false}
            className={styles['news-link']}
            href={thirdColumnNews[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles['side-img-wrapper']}>
              <NewsImage
                src={thirdColumnNews[0]?.urlToImage}
                alt={thirdColumnNews[0]?.title}
              />
            </div>
            <span
              draggable={false}
              className={styles['side-column-main-news-text']}
            >
              {thirdColumnNews[0]?.title}
            </span>
          </a>
        </article>
        <div className={styles['side-list-news-block']}>
          {thirdColumnNews.slice(1, 4).map((newsItem, index) => (
            <div key={index}>
              <hr className={styles['horizontal-rule']} />
              <a
                draggable={false}
                className={styles['news-link']}
                href={newsItem?.url}
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
          ))}
        </div>
      </div>
    </section>
  )
)

export default MainNews
