import React from 'react';
import styles from '../styles/main.module.scss'

const Spotlight: React.FC = () => {
    return (
        <div className={styles.spotlightBlock}>
            <div className={styles.wrapper}>
                <div className={styles.titleWrapper}>
                    <h3 className={styles.spotlightTitle}>SPOTLIGHT</h3>
                </div>
                <hr className={styles.horizontalRule}/>
                <div className={styles.spotlightWrapper}>
                    <div className={styles.spotlightItem}>
                        <div>
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, tempora.</div>
                        </div>
                        <div className={styles.spotlightImgWrapper}>
                            <img src="https://cdn.vox-cdn.com/thumbor/dY1-HtI-QLYbgDgMeBjK5JkyY0U=/0x0:1000x791/1200x628/filters:focal(306x661:307x662)/cdn.vox-cdn.com/uploads/chorus_asset/file/25200758/belkin_stand_pro_lifestyle.jpg"
                                 alt=""/>
                        </div>
                    </div>
                    <div className={styles.spotlightItem}>
                        <div>
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, reiciendis.</div>
                        </div>
                        <div className={styles.spotlightImgWrapper}>
                            <img src="https://cdn.vox-cdn.com/thumbor/dY1-HtI-QLYbgDgMeBjK5JkyY0U=/0x0:1000x791/1200x628/filters:focal(306x661:307x662)/cdn.vox-cdn.com/uploads/chorus_asset/file/25200758/belkin_stand_pro_lifestyle.jpg"
                                 alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spotlight;