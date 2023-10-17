import React, {useCallback} from 'react';
import styles from "../../../App.module.css";
import {INewsData, RootState} from "../../../store/store.ts";
import NewsItem from "../NewsItem/NewsItem.tsx";
import {useSelector} from "react-redux";

const AllNews: React.FC = () => {

    const NewsItemMemo = React.memo(NewsItem);
    const { data: newsData, isLoading } = useSelector((state: RootState) => state.news);

    const renderNews = useCallback(() => {
        if (isLoading) {
            return <span className={styles.spinner}></span>;
        } else if (newsData) {
            return newsData.length === 0 ? <span>No news found</span> : newsData.map((news: INewsData) => <NewsItemMemo news={news} key={news.title}/>);
        }
        return null;
    }, [isLoading, newsData]);

    return (
        <>
            <div className={styles.News}>
                {renderNews()}
            </div>
        </>
    );
};

export default AllNews;