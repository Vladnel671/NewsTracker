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
            <div className={styles.sideBlock}>
                <div className={styles.sideColumnMainNewsBlock}>
                    <LazyImage src={firstColumnNews[0].urlToImage} alt={firstColumnNews[0].title}
                               className={styles.sideColumnMainNewsImg}/>
                    <span className={styles.sideColumnMainNewsText}>{firstColumnNews[0].title}</span>
                </div>
                <div className={styles.sideListNewsBlock}>

                    <div className={styles.ListItemBlock}>
                        <LazyImage src={firstListNewsBlock[0].urlToImage} alt={firstListNewsBlock[0].title}
                                   className={styles.listImg}/>
                        <span>{firstListNewsBlock[0].title}</span>
                    </div>
                    <div className={styles.ListItemBlock}>
                        <LazyImage src={firstListNewsBlock[1].urlToImage} alt={firstListNewsBlock[1].title}
                                   className={styles.listImg}/>
                        <span>{firstListNewsBlock[1].title}</span>
                    </div>
                    <div className={styles.ListItemBlock}>
                        <LazyImage src={firstListNewsBlock[1].urlToImage} alt={firstListNewsBlock[2].title}
                                   className={styles.listImg}/>
                        <span>{firstListNewsBlock[2].title}</span>
                    </div>
                </div>
            </div>
            <div className={styles.centralBlock}>
                <div className={styles.centralNewsBlock}>
                    <LazyImage src={thirdColumnNews[1].urlToImage} alt={thirdColumnNews[1].title}
                               className={styles.centralImg}/>
                    <span className={styles.centralNewsAuthor}>{thirdColumnNews[1].author}</span>
                    <span className={styles.centralText}>{thirdColumnNews[1].title}</span>
                </div>
                <div className={styles.centralListNewsBlock}>
                    <div className={styles.firstCentralListItemBlock}>
                        <LazyImage src={firstListNewsBlock[0].urlToImage} alt={firstListNewsBlock[1].title}
                                   className={styles.firstCentralListItemImgBlock}/>
                        <span className={styles.firstCentralListItemTextBlock}>{thirdColumnNews[1].title}</span>
                    </div>
                    <div className={styles.secondCentralListItemBlock}>
                        <LazyImage src={firstListNewsBlock[1].urlToImage} alt={firstListNewsBlock[1].title}
                                   className={styles.secondCentralListItemImgBlock}/>
                        <span className={styles.secondCentralListItemTextBlock}>{thirdColumnNews[1].title}</span>
                    </div>
                </div>
            </div>
            <div className={styles.sideBlock}>
                <div className={styles.sideColumnMainNewsBlock}>
                    <LazyImage src={thirdColumnNews[0].urlToImage} alt={firstListNewsBlock[0].title}
                               className={styles.sideColumnMainNewsImg}/>
                    <span className={styles.sideColumnMainNewsText}>{thirdColumnNews[0].title}</span>
                </div>
                <div className={styles.sideListNewsBlock}>
                    <div className={styles.ListItemBlock}>
                        <LazyImage src={thirdColumnNews[1].urlToImage} alt={firstListNewsBlock[1].title}
                                   className={styles.listImg}/>
                        <span className={styles.listText}>{thirdColumnNews[1].title}</span>
                    </div>
                    <div className={styles.ListItemBlock}>
                        <LazyImage src={thirdColumnNews[2].urlToImage} alt={firstListNewsBlock[2].title}
                                   className={styles.listImg}/>
                        <span className={styles.listText}>{thirdColumnNews[2].title}</span>
                    </div>
                    <div className={styles.ListItemBlock}>
                        <LazyImage src={thirdColumnNews[1].urlToImage} alt={firstListNewsBlock[1].title}
                                   className={styles.listImg}/>
                        <span className={styles.listText}>{thirdColumnNews[1].title}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNewsBlock;