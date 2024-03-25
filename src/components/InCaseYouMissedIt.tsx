import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { NewsImage } from './ui/shared/NewsImage'
import styles from '../styles/main.module.scss'
import { INewsData } from '../types/types'

const InCaseYouMissedIt: React.FC<{ inCaseYouMissedItNews: INewsData[] }> = ({
  inCaseYouMissedItNews,
}) => (
  <section className={styles['in-case-you-missed-it-block']}>
    <div className={styles['in-case-you-missed-wrapper']}>
      <h3 className={styles.title}>IN CASE YOU MISSED IT</h3>
      <Swiper
        className={styles['swiper']}
        role="listbox"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={200}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {inCaseYouMissedItNews?.map((image, index) => (
          <SwiperSlide key={index}>
            <article className={styles['in-case-you-missed-img-wrapper']}>
              <NewsImage src={image.urlToImage} alt={`Slide ${index + 1}`} />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
)

export default InCaseYouMissedIt
