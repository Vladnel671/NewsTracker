import React from 'react';
import styles from "../../../App.module.css";
import {INewsData, RootState} from "../../../store/store.ts";
import NewsItem from "../NewsItem/NewsItem.tsx";
import {useSelector} from "react-redux";

const AllNews: React.FC = () => {

    const news = useSelector((state: RootState) => state.news);
    const isLoading = useSelector((state: RootState) => state.news.isLoading)

    return (
        <>
            <div className={styles.News}>
                {isLoading ? (
                    <span className={styles.spinner}></span>
                ) : news ? (news.data.length === 0 ? (
                    <span>No news found</span>) : (news.data.map((news: INewsData) => (
                    <NewsItem news={news} key={news.title}/>
                )))) : null}
            </div>
        </>
    );
};

export default AllNews;