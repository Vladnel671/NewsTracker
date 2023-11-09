import React from 'react';
import styles from "../styles/main.module.scss";

const MainNewsBlock: React.FC = () => {
    return (
        <div className={styles.topHeadlinesNewsBlock}>
            <div className={styles.firstBlock}>
                <div className={styles.firstColumnMainNewsBlock}>
                    <div className={styles.firstColumnMainNewsImg}>ImgBlock</div>
                    <span className={styles.firstColumnMainNewsText}>Text news</span>
                </div>
                <div className={styles.firstListNewsBlock}>
                    <div className={styles.firstItemBlock}>
                        <div>ImgBlock2</div>
                        <span>Text news2</span>
                    </div>
                    <div className={styles.secondItemBlock}>
                        <div>ImgBlock3</div>
                        <span>Text news3</span>
                    </div>
                    <div className={styles.thirdItemBlock}>
                        <div>ImgBlock4</div>
                        <span>Text news4</span>
                    </div>
                </div>
            </div>
            <div className={styles.secondBlock}>Second Column</div>
            <div className={styles.thirdBlock}>Third Column</div>
        </div>
    );
};

export default MainNewsBlock;