import React from 'react'
import styles from "../styles/main.module.scss"
import {MainNewsBlockProps} from "../types/types.ts"
import {LazyImage} from "../components/LazyImage.tsx"
import {regex} from "../constant";
import NewsSkeleton from "../components/NewsSkeleton.tsx";

const MainNewsBlock: React.FC<MainNewsBlockProps> = React.memo(({
                                                                    firstColumnNews,
                                                                    secondColumnNews,
                                                                    thirdColumnNews,
                                                                    isLoading
                                                                }) => {
    return (
        <div className={styles.topHeadlinesNewsBlock}>
            {isLoading ? <NewsSkeleton/> :
                <>
                    <div className={styles.sideBlock}>
                        <div className={styles.sideColumnMainNewsBlock}>
                            <LazyImage isLoading={isLoading} src={firstColumnNews[0]?.urlToImage}
                                       alt={firstColumnNews[0]?.title}
                                       className={styles.sideColumnMainNewsImg}/>
                            <span className={styles.sideColumnMainNewsText}>
                        {firstColumnNews[0]?.title}
                    </span>
                        </div>
                        <div className={styles.sideListNewsBlock}>
                            {firstColumnNews.slice(1, 4).map((newsItem, index) => (
                                <div className={styles.ListItemBlock} key={index}>
                                    <div className={styles.listImgBLock}>
                                        <LazyImage
                                            isLoading={isLoading}
                                            src={newsItem.urlToImage}
                                            alt={newsItem.title}
                                            className={styles.listImg}
                                        />
                                    </div>
                                    <span className={styles.listText}>{newsItem.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.centralBlock}>
                        <div className={styles.centralNewsBlock}>
                            <LazyImage
                                isLoading={isLoading}
                                src={secondColumnNews[0]?.urlToImage}
                                alt={secondColumnNews[0]?.title}
                                className={styles.centralImg}/>
                            <span className={styles.centralNewsAuthor}>
  {secondColumnNews[0]?.author ? secondColumnNews[0].author.replace(regex, '$1') : ''}
                    </span>
                            <span className={styles.centralText}>{secondColumnNews[0]?.title}</span>
                        </div>
                        <div className={styles.centralListNewsBlock}>
                            {secondColumnNews.slice(1, 3).map((newsItem, index) => (
                                <div className={styles.ListItemBlock} key={index}>
                                    <div className={styles.listImgBLock}>
                                        <LazyImage
                                            isLoading={isLoading}
                                            src={newsItem.urlToImage}
                                            alt={newsItem.title}
                                            className={styles.listImg}
                                        />
                                    </div>
                                    <span className={styles.listText}>{newsItem.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.sideBlock}>
                        <div className={styles.sideColumnMainNewsBlock}>
                            <LazyImage
                                isLoading={isLoading}
                                src={thirdColumnNews[0]?.urlToImage}
                                alt={thirdColumnNews[0]?.title}
                                className={styles.sideColumnMainNewsImg}
                            />
                            <span className={styles.sideColumnMainNewsText}>{thirdColumnNews[0]?.title}</span>
                        </div>
                        <div className={styles.sideListNewsBlock}>
                            {thirdColumnNews.slice(1, 4).map((newsItem, index) => (
                                <div className={styles.ListItemBlock} key={index}>
                                    <div className={styles.listImgBLock}>
                                        <LazyImage
                                            isLoading={isLoading}
                                            src={newsItem.urlToImage}
                                            alt={newsItem.title}
                                            className={styles.listImg}
                                        />
                                    </div>
                                    <span className={styles.listText}>{newsItem.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>}
        </div>
    )
})

export default MainNewsBlock