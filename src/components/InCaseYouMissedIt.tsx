import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { NewsImage } from './ui/shared/NewsImage'
import styles from '../styles/main.module.scss'

const InCaseYouMissedIt: React.FC = () => {
  const images = [
    'https://cdn.vox-cdn.com/thumbor/dY1-HtI-QLYbgDgMeBjK5JkyY0U=/0x0:1000x791/1200x628/filters:focal(306x661:307x662)/cdn.vox-cdn.com/uploads/chorus_asset/file/25200758/belkin_stand_pro_lifestyle.jpg',
    'https://cdn.vox-cdn.com/thumbor/0aRHvUhuuMC03XGfF76VW2CQ5bs=/0x0:1920x1080/1200x628/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/25165732/ursula_0.jpg',
    'https://hackaday.com/wp-content/uploads/2023/12/web-browsers-featured.jpg',
    'https://media.wired.com/photos/6595c77fad56a0f3d69f4256/191:100/w_1280,c_limit/How-Ukraine-Could-Define-the-Future-of-Warfare-Security-GettyImages-1592374342.jpg',
    'https://hackaday.com/wp-content/uploads/2023/12/Edgar_Thomson.jpg',
  ]

  return (
    <section className={styles['in-case-you-missed-it-block']}>
      <div className={styles['in-case-you-missed-wrapper']}>
        <h3 className={styles.title}>IN CASE YOU MISSED IT</h3>
        <Swiper
          role="listbox"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={200}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <article className={styles['in-case-you-missed-img-wrapper']}>
                <NewsImage src={image} alt={`Slide ${index + 1}`} />
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default InCaseYouMissedIt
