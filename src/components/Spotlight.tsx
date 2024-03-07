import React from 'react'

import { NewsImage } from './ui/shared/NewsImage'
import styles from '../styles/main.module.scss'

const Spotlight: React.FC = () => (
  <section className={styles['spotlight-block']}>
    <div className={styles['spotlight-content-wrapper']}>
      <div className={styles['spotlight-title-wrapper']}>
        <h3 className={styles['spotlight-text']}>SPOTLIGHT</h3>
      </div>
      <hr className={styles['horizontal-rule']} />
      <div className={styles['spotlight-wrapper']}>
        <article className={styles['spotlight-item']}>
          <a className={styles['news-link']}>
            <div className={styles['spotlight-title-and-description-wrapper']}>
              <span className={styles['spotlight-title']}>
                Lorem ipsum dolor sit amet.
              </span>
              <span className={styles['spotlight-description']}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
                tempora.
              </span>
            </div>
            <div className={styles['spotlight-img-wrapper']}>
              <NewsImage
                src="https://cdn.vox-cdn.com/thumbor/dY1-HtI-QLYbgDgMeBjK5JkyY0U=/0x0:1000x791/1200x628/filters:focal(306x661:307x662)/cdn.vox-cdn.com/uploads/chorus_asset/file/25200758/belkin_stand_pro_lifestyle.jpg"
                alt=""
              />
            </div>
          </a>
        </article>
        <article className={styles['spotlight-item']}>
          <a className={styles['news-link']}>
            <div className={styles['spotlight-title-and-description-wrapper']}>
              <span className={styles['spotlight-title']}>
                Lorem ipsum dolor sit amet.
              </span>
              <span className={styles['spotlight-description']}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
                tempora.
              </span>
            </div>
            <div className={styles['spotlight-img-wrapper']}>
              <NewsImage
                src="https://cdn.vox-cdn.com/thumbor/dY1-HtI-QLYbgDgMeBjK5JkyY0U=/0x0:1000x791/1200x628/filters:focal(306x661:307x662)/cdn.vox-cdn.com/uploads/chorus_asset/file/25200758/belkin_stand_pro_lifestyle.jpg"
                alt=""
              />
            </div>
          </a>
        </article>
      </div>
    </div>
  </section>
)

export default Spotlight
