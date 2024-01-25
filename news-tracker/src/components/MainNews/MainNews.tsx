import React from 'react'
import styles from "../../styles/main.module.scss"
import {MainNewsBlockProps} from "../../types/types.ts"
import {LazyImage} from "../LazyImage.tsx"
import {regex} from "../../constant";

const MainNews: React.FC<MainNewsBlockProps> = React.memo(({
                                                               firstColumnNews,
                                                               secondColumnNews,
                                                               thirdColumnNews,
                                                           }) => {
    return (
        <section className={styles.topHeadlinesNewsBlock}>
            <div className={styles.sideBlock}>
                <article className={styles.sideColumnMainNewsBlock}>
                    <a className={styles.newsLink} href={firstColumnNews[0]?.url} target="_blank"
                       rel='noopener noreferrer'>
                        <div className={styles.sideImgWrapper}>
                            <LazyImage src={firstColumnNews[0]?.urlToImage}
                                       alt={firstColumnNews[0]?.title}
                                       className={styles.sideColumnMainNewsImg}
                                       height='180px'
                                       width='350px'/>
                        </div>
                        <span className={styles.sideColumnMainNewsText}>
                        {firstColumnNews[0]?.title}
                    </span></a>
                </article>
                <div className={styles.sideListNewsBlock}>
                    {firstColumnNews.slice(1, 4).map((newsItem, index) => (
                        <div key={index}>
                            <hr className={styles.horizontalRule}/>
                            <a className={styles.newsLink} href={newsItem?.url} target="_blank"
                               rel='noopener noreferrer'>
                                <article className={styles.ListItemBlock}>
                                    <div className={styles.listImgBLock}>
                                        <LazyImage
                                            width='150px'
                                            height='80px'
                                            src={newsItem.urlToImage}
                                            alt={newsItem.title}
                                            className={styles.listImg}
                                        />
                                    </div>
                                    <span className={styles.listText}>{newsItem.title}</span>
                                </article>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.centralBlock}>
                <article className={styles.centralNewsBlock}>
                    <a className={styles.newsLink} href={secondColumnNews[0]?.url} target="_blank"
                       rel='noopener noreferrer'>
                        <div className={styles.centralImgWrapper}>
                            <LazyImage
                                width='600px'
                                height='330px'
                                src={secondColumnNews[0]?.urlToImage}
                                alt={secondColumnNews[0]?.title}/>
                        </div>
                        <span className={styles.centralNewsAuthor}>
  {secondColumnNews[0]?.author ? secondColumnNews[0].author.replace(regex, '$1') : ''}
                    </span>
                        <span className={styles.centralText}>{secondColumnNews[0]?.title}</span>
                    </a>
                </article>
                <div className={styles.centralListNewsBlock}>
                    {secondColumnNews.slice(1, 3).map((newsItem, index) => (
                        <div key={index}>
                            <hr className={styles.horizontalRule}/>
                            <a className={styles.newsLink} href={newsItem?.url} target="_blank"
                               rel='noopener noreferrer'>
                                <article className={styles.ListItemBlock}>
                                    <div className={styles.listImgBLock}>
                                        <LazyImage
                                            width='150px'
                                            height='80px'
                                            src={newsItem.urlToImage}
                                            alt={newsItem.title}
                                        />
                                    </div>
                                    <span className={styles.listText}>{newsItem.title}</span>
                                </article>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.sideBlock}>
                <article className={styles.sideColumnMainNewsBlock}>
                    <a className={styles.newsLink} href={thirdColumnNews[0]?.url} target="_blank"
                       rel='noopener noreferrer'>
                        <div className={styles.sideImgWrapper}>
                            <LazyImage
                                height='180px'
                                width='350px'
                                src={thirdColumnNews[0]?.urlToImage}
                                alt={thirdColumnNews[0]?.title}
                            />
                        </div>
                        <span className={styles.sideColumnMainNewsText}>{thirdColumnNews[0]?.title}</span></a>
                </article>
                <div className={styles.sideListNewsBlock}>
                    {thirdColumnNews.slice(1, 4).map((newsItem, index) => (
                        <div key={index}>
                            <hr className={styles.horizontalRule}/>
                            <a className={styles.newsLink} href={newsItem?.url} target="_blank"
                               rel='noopener noreferrer'>
                                <article className={styles.ListItemBlock}>
                                    <div className={styles.listImgBLock}>
                                        <LazyImage
                                            width='150px'
                                            height='80px'
                                            src={newsItem.urlToImage}
                                            alt={newsItem.title}
                                        />
                                    </div>
                                    <span className={styles.listText}>{newsItem.title}</span>
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