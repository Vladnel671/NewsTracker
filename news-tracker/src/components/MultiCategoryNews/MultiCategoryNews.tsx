import React from 'react'
import styles from '../../styles/main.module.scss'
import {MultiCategoryNewsProps} from "../../types/types.ts";
import {LazyImage} from "../LazyImage.tsx";

const MultiCategoryNews: React.FC<MultiCategoryNewsProps> = React.memo(({news}) => {
    return (
        <div className={styles.multiNewsBlock}>
            <div className={styles.multiNews}>
                <hr className={styles.horizontalRule}/>
                <h3 className={styles.newsCategoryName}>BUSINESS</h3>
                <a className={styles.newsLink} href={news[0]?.url} target="_blank"
                   rel='noopener noreferrer'>
                    <div className={styles.multiNewsImgWrapper}>
                        <LazyImage src={news[0]?.urlToImage}
                                   alt={news[0]?.title}
                                   className={styles.MultiCategoryMainImg}
                                   height='280px'
                                   width='430px'/>
                    </div>
                    <h3 className={styles.mainNewsTitle}>{news[0]?.title}</h3>
                </a>
                <hr className={styles.horizontalRule}/>
                {news.slice(1, 4).map((news, index) => (
                    <div key={index}>
                        <a key={index} className={styles.newsLink} href={news?.url} target="_blank"
                           rel='noopener noreferrer'><span className={styles.newsText}>{news?.title}</span>
                        </a>
                        <hr className={styles.horizontalRule}/>
                    </div>
                ))}
            </div>
            <div className={styles.multiNews}>
                <hr className={styles.horizontalRule}/>
                <h3 className={styles.newsCategoryName}>SCIENCE</h3>
                <a className={styles.newsLink} href={news[1]?.url} target="_blank"
                   rel='noopener noreferrer'>
                    <div className={styles.multiNewsImgWrapper}>
                        <LazyImage src={news[1]?.urlToImage}
                                   alt={news[1]?.title}
                                   className={styles.MultiCategoryMainImg}
                                   height='280px'
                                   width='430px'/>
                    </div>
                    <h3 className={styles.mainNewsTitle}>{news[1]?.title}</h3>
                </a>
                <hr className={styles.horizontalRule}/>
                {news.slice(1, 4).map((news, index) => (
                    <div key={index}>
                        <a key={index} className={styles.newsLink} href={news?.url} target="_blank"
                           rel='noopener noreferrer'>
                            <span className={styles.newsText}>{news?.title}</span>
                            <hr className={styles.horizontalRule}/>
                        </a>
                    </div>
                ))}
            </div>
            <div className={styles.multiNews}>
                <hr className={styles.horizontalRule}/>
                <h3 className={styles.newsCategoryName}>LIFESTYLE</h3>
                <a className={styles.newsLink} href={news[3]?.url} target="_blank"
                   rel='noopener noreferrer'>
                    <div className={styles.multiNewsImgWrapper}>
                        <LazyImage src={news[3]?.urlToImage}
                                   alt={news[3]?.title}
                                   className={styles.MultiCategoryMainImg}
                                   height='280px'
                                   width='430px'/>
                    </div>
                    <h3 className={styles.mainNewsTitle}>{news[3]?.title}</h3>
                    <hr className={styles.horizontalRule}/>
                </a>

                {news.slice(1, 4).map((news, index) => (
                    <div key={index}>
                        <a key={index} className={styles.newsLink} href={news?.url} target="_blank"
                           rel='noopener noreferrer'>
                            <span className={styles.newsText}>{news?.title}</span>
                            <hr className={styles.horizontalRule}/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
})

export default MultiCategoryNews