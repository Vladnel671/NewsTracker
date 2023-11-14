import React from 'react'
import styles from "../styles/main.module.scss"
import {MainNewsBlockProps} from "../types/types.ts"
import {LazyImage} from "../components/LazyImage.tsx"

let regex = /<a[^>]*>([^<]+)<\/a>/g

const MainNewsBlock: React.FC<MainNewsBlockProps> = React.memo(({
                                                                    firstColumnNews,
                                                                    secondColumnNews,
                                                                    thirdColumnNews
                                                                }) => {
    return (
        <div className={styles.topHeadlinesNewsBlock}>
            <div className={styles.sideBlock}>
                <div className={styles.sideColumnMainNewsBlock}>
                    <LazyImage src={firstColumnNews[0]?.urlToImage} alt={firstColumnNews[0]?.title}
                               className={styles.sideColumnMainNewsImg}/>
                    <span className={styles.sideColumnMainNewsText}>{firstColumnNews[0]?.title}</span>
                </div>
                <div className={styles.sideListNewsBlock}>
                    {firstColumnNews.slice(1, 4).map((newsItem, index) => (
                        <div className={styles.ListItemBlock} key={index}>
                            <LazyImage src={newsItem.urlToImage} alt={newsItem.title} className={styles.listImg}/>
                            <span>{newsItem.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.centralBlock}>
                <div className={styles.centralNewsBlock}>
                    <LazyImage src={secondColumnNews[0]?.urlToImage} alt={secondColumnNews[0]?.title}
                               className={styles.centralImg}/>
                    <span className={styles.centralNewsAuthor}>{secondColumnNews[0]?.author.replace(regex, '$1')}</span>
                    <span className={styles.centralText}>{secondColumnNews[0]?.title}</span>
                </div>
                <div className={styles.centralListNewsBlock}>
                    {secondColumnNews.slice(1, 3).map((newsItem, index) => (
                        <div
                            className={index === 0 ? styles.firstCentralListItemBlock : styles.secondCentralListItemBlock}
                            key={index}>
                            <LazyImage src={newsItem.urlToImage} alt={newsItem.title} className={styles.listImg}/>
                            <span
                                className={index === 0 ? styles.firstCentralListItemTextBlock : styles.secondCentralListItemTextBlock}>{newsItem.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.sideBlock}>
                <div className={styles.sideColumnMainNewsBlock}>
                    <LazyImage
                        src={thirdColumnNews[0]?.urlToImage}
                        alt={thirdColumnNews[0]?.title}
                        className={styles.sideColumnMainNewsImg}
                    />
                    <span className={styles.sideColumnMainNewsText}>{thirdColumnNews[0]?.title}</span>
                </div>
                <div className={styles.sideListNewsBlock}>
                    {thirdColumnNews.slice(1,4).map((newsItem, index) => (
                        <div className={styles.ListItemBlock} key={index}>
                            <LazyImage
                                src={newsItem.urlToImage}
                                alt={newsItem.title}
                                className={styles.listImg}
                            />
                            <span className={styles.listText}>{newsItem.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
})

export default MainNewsBlock