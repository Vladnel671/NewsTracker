import React from 'react'
import styles from '../styles/main.module.scss'
import {MultiCategoryNewsProps} from "../types/types.ts";
import {LazyImage} from "./LazyImage.tsx";

const MultiCategoryNews: React.FC<MultiCategoryNewsProps> = React.memo(({firstColumnMultiCategoryNews}) => {
    return (
        <div className={styles.multiNewsBlock}>
            <div className={styles.multiNewsFirstBlock}>
                <span>US POLITICS</span>
                <a className={styles.newsLink} href={firstColumnMultiCategoryNews[0]?.url} target="_blank"
                   rel='noopener noreferrer'>
                    <LazyImage src={firstColumnMultiCategoryNews[0]?.urlToImage}
                               alt={firstColumnMultiCategoryNews[0]?.title}
                               className={styles.firstBlockMultiCategoryMainImg}
                               height='280px'
                               width='500px'/>
                    <h3>{firstColumnMultiCategoryNews[0]?.title}</h3>
                </a>

                {firstColumnMultiCategoryNews.slice(1, 4).map((news, index) => (
                    <div key={index}>
                        <a key={index} className={styles.newsLink} href={news?.url} target="_blank"
                           rel='noopener noreferrer'><span className={styles.newsText}>{news?.title}</span>
                        </a>
                    </div>
                ))}
            </div>
            <div className={styles.multiNewsSecondBlock}>
                <span>SCIENCE AND HEALTH</span>
            </div>
            <div className={styles.multiNewsThirdBlock}>
                <span>TECH</span>
            </div>
        </div>
    );
})

export default MultiCategoryNews