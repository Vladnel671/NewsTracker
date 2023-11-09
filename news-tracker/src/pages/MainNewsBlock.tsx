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
            <div className={styles.secondBlock}>
                <div className={styles.centralNewsBlock}>
                    <div className={styles.centralImg}>ImgBlock2</div>
                    <span className={styles.centralNewsAuthor}>Author</span>
                    <span className={styles.centralText}>Text news2</span>
                </div>
                <div className={styles.centralListNewsBlock}>
                    <div className={styles.firstCentralListItemBlock}>
                        <div className={styles.firstCentralListItemImgBlock}>ImgBlock1</div>
                        <span className={styles.firstCentralListItemTextBlock}>Text news1</span>
                    </div>
                    <div className={styles.secondCentralListItemBlock}>
                        <div className={styles.secondCentralListItemImgBlock}>ImgBlock2</div>
                        <span className={styles.secondCentralListItemTextBlock}>Text news2</span>
                    </div>
                </div>
            </div>
            <div className={styles.thirdBlock}>
                <div className={styles.thirdColumnMainNewsBlock}>
                    <div className={styles.thirdColumnMainNewsImg}>ImgBlock</div>
                    <span className={styles.thirdColumnMainNewsText}>Text news</span>
                </div>
                <div className={styles.thirdListNewsBlock}>
                    <div className={styles.thirdListFirstItemBlock}>
                        <div>ImgBlock2</div>
                        <span>Text news2</span>
                    </div>
                    <div className={styles.thirdListSecondItemBlock}>
                        <div>ImgBlock3</div>
                        <span>Text news3</span>
                    </div>
                    <div className={styles.thirdListThirdItemBlock}>
                        <div>ImgBlock4</div>
                        <span>Text news4</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNewsBlock;