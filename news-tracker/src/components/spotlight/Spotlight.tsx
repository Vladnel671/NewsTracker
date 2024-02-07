import React from 'react'

import styles from '../../styles/main.module.scss'

const Spotlight: React.FC = () => (
  <section className={styles.spotlightBlock}>
    <div className={styles.spotlightContentWrapper}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.spotlightTitle}>SPOTLIGHT</h3>
      </div>
      <hr className={styles.horizontalRule} />
      <div className={styles.spotlightWrapper}>
        <article className={styles.spotlightItem}>
          <a className={styles.newsLink}>
            <div className={styles.spotlightTitleAndDescriptionWrapper}>
              <span className={styles.spotlightTitle}>
                Lorem ipsum dolor sit amet.
              </span>
              <span className={styles.spotlightDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
                tempora.
              </span>
            </div>
            <div className={styles.spotlightImgWrapper}>
              <img
                draggable={false}
                className={styles.newsImage}
                src="https://cdn.vox-cdn.com/thumbor/dY1-HtI-QLYbgDgMeBjK5JkyY0U=/0x0:1000x791/1200x628/filters:focal(306x661:307x662)/cdn.vox-cdn.com/uploads/chorus_asset/file/25200758/belkin_stand_pro_lifestyle.jpg"
                alt=""
              />
            </div>
          </a>
        </article>
        <article className={styles.spotlightItem}>
          <a className={styles.newsLink}>
            <div className={styles.spotlightTitleAndDescriptionWrapper}>
              <span className={styles.spotlightTitle}>
                Lorem ipsum dolor sit amet.
              </span>
              <span className={styles.spotlightDescription}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
                tempora.
              </span>
            </div>
            <div className={styles.spotlightImgWrapper}>
              <img
                draggable={false}
                className={styles.newsImage}
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
