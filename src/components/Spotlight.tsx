import React from 'react'

import { NewsImage } from './ui/shared/NewsImage'
import styles from '../styles/main.module.scss'
import { INewsData } from '../types/types'

const Spotlight: React.FC<{ spotlightNews: INewsData[] }> = ({
  spotlightNews,
}) => (
  <section className={styles['spotlight-block']}>
    <div className={styles['spotlight-content-wrapper']}>
      <div className={styles['spotlight-title-wrapper']}>
        <h3 className={styles['spotlight-text']}>SPOTLIGHT</h3>
      </div>
      <hr className={styles['horizontal-rule']} />
      <div className={styles['spotlight-wrapper']}>
        <article className={styles['spotlight-item']}>
          <a className={styles['news-link']}>
            <div className={styles['img-and-text-wrapper']}>
              <div
                className={styles['spotlight-title-and-description-wrapper']}
              >
                <h4 className={styles['spotlight-title']}>
                  {spotlightNews[2].title}
                </h4>
                <span className={styles['spotlight-description']}>
                  {spotlightNews[2].description}
                </span>
              </div>
              <div className={styles['spotlight-img-wrapper']}>
                <NewsImage
                  src={spotlightNews[2].urlToImage}
                  alt={spotlightNews[2].title}
                />
              </div>
            </div>
          </a>
        </article>
        <article className={styles['spotlight-item']}>
          <a className={styles['news-link']}>
            <div className={styles['img-and-text-wrapper']}>
              <div
                className={styles['spotlight-title-and-description-wrapper']}
              >
                <h4 className={styles['spotlight-title']}>
                  {spotlightNews[1].title}
                </h4>
                <span className={styles['spotlight-description']}>
                  {spotlightNews[1].description}
                </span>
              </div>
              <div className={styles['spotlight-img-wrapper']}>
                <NewsImage
                  src={spotlightNews[1].urlToImage}
                  alt={spotlightNews[1].title}
                />
              </div>
            </div>
          </a>
        </article>
      </div>
    </div>
  </section>
)

export default Spotlight
