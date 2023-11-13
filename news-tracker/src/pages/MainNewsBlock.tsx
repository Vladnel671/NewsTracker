import React from 'react';
import styles from "../styles/main.module.scss";
import {INewsData} from "../types/types.ts";
import {LazyImage} from "../components/LazyImage.tsx";

const MainNewsBlock: React.FC<{ news: INewsData[] }> = ({news}) => {

    const firstColumnNews = news.slice(0, 1);
    const firstListNewsBlock = news.slice(1, 4);
    const thirdColumnNews = news.slice(4, 7);

    return (
        <div className={styles.topHeadlinesNewsBlock}>
            <div className={styles.firstBlock}>
                <div className={styles.firstColumnMainNewsBlock}>
                    <LazyImage src={firstColumnNews[0].urlToImage} alt={firstColumnNews[0].title}
                               className={styles.firstColumnMainNewsImg}/>
                    <span className={styles.firstColumnMainNewsText}>{firstColumnNews[0].title}</span>
                </div>
                <div className={styles.firstListNewsBlock}>
                    <>
                        <div className={styles.firstItemBlock}>
                            <LazyImage src={firstListNewsBlock[0].urlToImage} alt={firstListNewsBlock[0].title}
                                       className={styles.listImg}/>
                            <span>{firstListNewsBlock[0].title}</span>
                        </div>
                        <div className={styles.secondItemBlock}>
                            <LazyImage src={firstListNewsBlock[1].urlToImage} alt={firstListNewsBlock[1].title}
                                       className={styles.listImg}/>
                            <span>{firstListNewsBlock[1].title}</span>
                        </div>
                        <div className={styles.thirdItemBlock}>
                            <LazyImage src={firstListNewsBlock[1].urlToImage} alt={firstListNewsBlock[2].title}
                                       className={styles.listImg}/>
                            <span>{firstListNewsBlock[2].title}</span>
                        </div>
                    </>
                </div>
            </div>
            <div className={styles.secondBlock}>
                <div className={styles.centralNewsBlock}>
                    <LazyImage src={thirdColumnNews[1].urlToImage} alt={thirdColumnNews[1].title}
                               className={styles.centralImg}/>
                    <span className={styles.centralNewsAuthor}>{thirdColumnNews[1].author}</span>
                    <span className={styles.centralText}>{thirdColumnNews[1].title}</span>
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