import React from 'react';
import styles from '../styles/main.module.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';

const InCaseYouMissedIt: React.FC = () => {
    return (
        <div className={styles.inCaseYouMissedItBlock}>
            <div className={styles.inCaseYouMissedWrapper}>
                <h3 className={styles.title}>IN CASE YOU MISSED IT</h3>
                <hr className={styles.horizontalRule}/>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={200}
                    slidesPerView={3}
                    navigation
                    pagination={{clickable: true}}
                    scrollbar={{draggable: true}
                    }
                >
                    <SwiperSlide>
                        <div className={styles.ImgWrapper}>
                            <img className={styles.Img}
                                 src="https://cdn.vox-cdn.com/thumbor/dY1-HtI-QLYbgDgMeBjK5JkyY0U=/0x0:1000x791/1200x628/filters:focal(306x661:307x662)/cdn.vox-cdn.com/uploads/chorus_asset/file/25200758/belkin_stand_pro_lifestyle.jpg"
                                 alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.ImgWrapper}>
                            <img className={styles.Img}
                                 src="https://cdn.vox-cdn.com/thumbor/dY1-HtI-QLYbgDgMeBjK5JkyY0U=/0x0:1000x791/1200x628/filters:focal(306x661:307x662)/cdn.vox-cdn.com/uploads/chorus_asset/file/25200758/belkin_stand_pro_lifestyle.jpg"
                                 alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.ImgWrapper}>
                            <img className={styles.Img}
                                 src="https://cdn.vox-cdn.com/thumbor/dY1-HtI-QLYbgDgMeBjK5JkyY0U=/0x0:1000x791/1200x628/filters:focal(306x661:307x662)/cdn.vox-cdn.com/uploads/chorus_asset/file/25200758/belkin_stand_pro_lifestyle.jpg"
                                 alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.ImgWrapper}>
                            <img className={styles.Img}
                                 src="https://cdn.vox-cdn.com/thumbor/dY1-HtI-QLYbgDgMeBjK5JkyY0U=/0x0:1000x791/1200x628/filters:focal(306x661:307x662)/cdn.vox-cdn.com/uploads/chorus_asset/file/25200758/belkin_stand_pro_lifestyle.jpg"
                                 alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.ImgWrapper}>
                            <img className={styles.Img}
                                 src="https://cdn.vox-cdn.com/thumbor/dY1-HtI-QLYbgDgMeBjK5JkyY0U=/0x0:1000x791/1200x628/filters:focal(306x661:307x662)/cdn.vox-cdn.com/uploads/chorus_asset/file/25200758/belkin_stand_pro_lifestyle.jpg"
                                 alt=""/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
};

export default InCaseYouMissedIt;