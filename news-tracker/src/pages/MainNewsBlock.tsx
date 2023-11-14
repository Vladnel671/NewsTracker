import React from 'react'
import styles from "../styles/main.module.scss"
import {INewsData} from "../types/types.ts"
import {LazyImage} from "../components/LazyImage.tsx"

const MainNewsBlock: React.FC<{ news: INewsData[] }> = ({news}) => {
    const firstColumnNews = news.slice(0, 5)
    const secondColumnNews = news.slice(5, 8)
    const thirdColumnNews = news.slice(8, 12)

    return (
        <div className={styles.topHeadlinesNewsBlock}>
            <div className={styles.sideBlock}>
                <div className={styles.sideColumnMainNewsBlock}>
                    <LazyImage src={firstColumnNews[0]?.urlToImage} alt={firstColumnNews[0]?.title}
                               className={styles.sideColumnMainNewsImg}/>
                    <span className={styles.sideColumnMainNewsText}>{firstColumnNews[0]?.title}</span>
                </div>
                <div className={styles.sideListNewsBlock}>
                    <div className={styles.ListItemBlock}>
                        <LazyImage src={firstColumnNews[1]?.urlToImage} alt={firstColumnNews[1]?.title}
                                   className={styles.listImg}/>
                        <span>{firstColumnNews[1]?.title}</span>
                    </div>
                    <div className={styles.ListItemBlock}>
                        <LazyImage src={firstColumnNews[2]?.urlToImage} alt={firstColumnNews[2]?.title}
                                   className={styles.listImg}/>
                        <span>{firstColumnNews[2]?.title}</span>
                    </div>
                    <div className={styles.ListItemBlock}>
                        <LazyImage src={firstColumnNews[3]?.urlToImage} alt={firstColumnNews[3]?.title}
                                   className={styles.listImg}/>
                        <span>{firstColumnNews[3]?.title}</span>
                    </div>
                </div>
            </div>

            <div className={styles.centralBlock}>
                <div className={styles.centralNewsBlock}>
                    <LazyImage src={secondColumnNews[0]?.urlToImage} alt={secondColumnNews[0]?.title}
                               className={styles.centralImg}/>
                    <span className={styles.centralNewsAuthor}>{secondColumnNews[0]?.author}</span>
                    <span className={styles.centralText}>{secondColumnNews[0]?.title}</span>
                </div>
                <div className={styles.centralListNewsBlock}>
                    <div className={styles.firstCentralListItemBlock}>
                        <LazyImage src={secondColumnNews[1]?.urlToImage} alt={secondColumnNews[1]?.title}
                                   className={styles.listImg}/>
                        <span className={styles.firstCentralListItemTextBlock}>{secondColumnNews[1]?.title}</span>
                    </div>
                    <div className={styles.secondCentralListItemBlock}>
                        <LazyImage src={secondColumnNews[2]?.urlToImage} alt={secondColumnNews[2]?.title}
                                   className={styles.listImg}/>
                        <span className={styles.secondCentralListItemTextBlock}>{secondColumnNews[2]?.title}</span>
                    </div>
                </div>
            </div>

            <div className={styles.sideBlock}>
                <div className={styles.sideColumnMainNewsBlock}>
                    <LazyImage src={thirdColumnNews[0]?.urlToImage} alt={thirdColumnNews[0]?.title}
                               className={styles.sideColumnMainNewsImg}/>
                    <span className={styles.sideColumnMainNewsText}>{thirdColumnNews[0]?.title}</span>
                </div>
                <div className={styles.sideListNewsBlock}>
                    <div className={styles.ListItemBlock}>
                        <LazyImage src={thirdColumnNews[1]?.urlToImage} alt={thirdColumnNews[1]?.title}
                                   className={styles.listImg}/>
                        <span className={styles.listText}>{thirdColumnNews[1]?.title}</span>
                    </div>
                    <div className={styles.ListItemBlock}>
                        <LazyImage src={thirdColumnNews[2]?.urlToImage} alt={thirdColumnNews[2]?.title}
                                   className={styles.listImg}/>
                        <span className={styles.listText}>{thirdColumnNews[2]?.title}</span>
                    </div>
                    <div className={styles.ListItemBlock}>
                        <LazyImage src={thirdColumnNews[3]?.urlToImage} alt={thirdColumnNews[3]?.title}
                                   className={styles.listImg}/>
                        <span className={styles.listText}>{thirdColumnNews[3]?.title}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNewsBlock