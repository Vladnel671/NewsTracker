import React from 'react'
import styles from "../../styles/main.module.scss"
import {MainNewsBlockProps} from "../../types/types.ts"
import {LazyImage} from "../shared/lazyImage/LazyImage.tsx"
import {regex} from "../../constant";

const MainNews: React.FC<MainNewsBlockProps> = React.memo(({
                                                               firstColumnNews,
                                                               secondColumnNews,
                                                               thirdColumnNews,
                                                           }) => {
    return (
        <section className={styles.MainNewsBlock}>
            <div className={styles.sideBlock}>
                <article className={styles.sideColumnMainNewsBlock}>
                    <a draggable={false} className={styles.newsLink} href={firstColumnNews[0]?.url} target="_blank"
                       rel='noopener noreferrer'>
                        <div className={styles.sideImgWrapper}>
                            <LazyImage src={firstColumnNews[0]?.urlToImage} alt={firstColumnNews[0]?.title}/>
                        </div>
                        <span draggable={false} className={styles.sideColumnMainNewsText}>
                        {firstColumnNews[0]?.title}
                    </span></a>
                </article>
                <div className={styles.sideListNewsBlock}>
                    {firstColumnNews.slice(1, 4).map((newsItem, index) => (
                        <div key={index}>
                            <hr className={styles.horizontalRule}/>
                            <a draggable={false} className={styles.newsLink} href={newsItem?.url} target="_blank"
                               rel='noopener noreferrer'>
                                <article className={styles.ListItemBlock}>
                                    <div className={styles.listImgBLock}>
                                        <LazyImage src={newsItem.urlToImage} alt={newsItem.title}
                                        />
                                    </div>
                                    <span draggable={false} className={styles.listText}>{newsItem.title}</span>
                                </article>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.centralBlock}>
                <article className={styles.centralNewsBlock}>
                    <a draggable={false} className={styles.newsLink} href={secondColumnNews[0]?.url} target="_blank"
                       rel='noopener noreferrer'>
                        <div className={styles.centralImgWrapper}>
                            <LazyImage src={secondColumnNews[0]?.urlToImage} alt={secondColumnNews[0]?.title}/>
                        </div>
                        <span className={styles.centralNewsAuthor}>
  {secondColumnNews[0]?.author ? secondColumnNews[0].author.replace(regex, '$1') : ''}
                    </span>
                        <span draggable={false} className={styles.centralText}>{secondColumnNews[0]?.title}</span>
                    </a>
                </article>
                <div className={styles.centralListNewsBlock}>
                    {secondColumnNews.slice(1, 3).map((newsItem, index) => (
                        <div key={index}>
                            <hr className={styles.horizontalRule}/>
                            <a draggable={false} className={styles.newsLink} href={newsItem?.url} target="_blank"
                               rel='noopener noreferrer'>
                                <article className={styles.ListItemBlock}>
                                    <div className={styles.listImgBLock}>
                                        <LazyImage src={newsItem.urlToImage} alt={newsItem.title}
                                        />
                                    </div>
                                    <span draggable={false} className={styles.listText}>{newsItem.title}</span>
                                </article>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.sideBlock}>
                <article className={styles.sideColumnMainNewsBlock}>
                    <a draggable={false} className={styles.newsLink} href={thirdColumnNews[0]?.url} target="_blank"
                       rel='noopener noreferrer'>
                        <div className={styles.sideImgWrapper}>
                            <LazyImage src={thirdColumnNews[0]?.urlToImage} alt={thirdColumnNews[0]?.title}
                            />
                        </div>
                        <span draggable={false}
                              className={styles.sideColumnMainNewsText}>{thirdColumnNews[0]?.title}</span></a>
                </article>
                <div className={styles.sideListNewsBlock}>
                    {thirdColumnNews.slice(1, 4).map((newsItem, index) => (
                        <div key={index}>
                            <hr className={styles.horizontalRule}/>
                            <a draggable={false} className={styles.newsLink} href={newsItem?.url} target="_blank"
                               rel='noopener noreferrer'>
                                <article className={styles.ListItemBlock}>
                                    <div className={styles.listImgBLock}>
                                        <LazyImage src={newsItem.urlToImage} alt={newsItem.title}
                                        />
                                    </div>
                                    <span draggable={false} className={styles.listText}>{newsItem.title}</span>
                                </article>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
})

export default MainNews