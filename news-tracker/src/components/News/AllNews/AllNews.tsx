import React from 'react';
import styles from '../../../styles/main.module.scss';
import {INewsData, RootState} from "../../../store/store.ts";
import NewsItem from "../NewsItem/NewsItem.tsx";
import {useSelector} from "react-redux";
import Masonry from 'react-masonry-css';

const AllNews: React.FC = () => {

    const breakpointColumnsObj = {
        default: 3,
        1250: 2,
        830: 1
    };

    const NewsItemMemo = React.memo(NewsItem);
    const {data: newsData, isLoading} = useSelector((state: RootState) => state.news);

    if (!newsData.length || isLoading) return <div className={styles.spinnerBlock}>
        <span className={styles.spinner}></span>
    </div>

    return (
            <div className={styles.allNewsBlock}>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={styles.masonryGrid}
                    columnClassName={styles.masonryGridColumn}
                >
                {newsData.map((news: INewsData) => (
                    <NewsItemMemo news={news} key={news.title}/>
                ))}
                </Masonry>
            </div>
    );
};

export default AllNews;