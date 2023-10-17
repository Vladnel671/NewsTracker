import React, {useEffect, useCallback} from 'react';
import styles from "../../../App.module.css";
import NewsItem from "../NewsItem/NewsItem.tsx";
import {INewsData, RootState} from "../../../store/store.ts";
import {fetchNewsData} from "../../../utils/NewsUtils.ts";
import {useDispatch, useSelector} from "react-redux";
import {setLoadingTopHeadlines, setTopHeadlines} from "../../../store/actions.ts";
import {TOP_HEADLINES_URL} from "../../../../../config.ts";

const TopHeadlines: React.FC = () => {
    const NewsItemMemo = React.memo(NewsItem);
    const dispatch = useDispatch();

    const {data: news, isLoading} = useSelector((state: RootState) => state.topHeadlines);

    const getData = useCallback(async () => {
        if (news.length > 0) {
            return;
        }
        try {
            dispatch(setLoadingTopHeadlines(true));
            const filteredNews = await fetchNewsData(TOP_HEADLINES_URL);
            dispatch(setTopHeadlines(filteredNews));
            dispatch(setLoadingTopHeadlines(false));
        } catch (error) {
            console.log('Ошибка при выполнении GET-запроса:', error);
        } finally {
            dispatch(setLoadingTopHeadlines(false));
        }
    }, [dispatch]);

    useEffect(() => {
        if (!news.length) {
            getData();
        }
    }, [getData, news.length]);

    if (!news.length) return null;

    return (
        <div className={styles.News}>
            {isLoading ? (
                <span className={styles.spinner}></span>
            ) : news.length === 0 ? (
                <span>No news found</span>
            ) : (
                news.map((newsItem: INewsData) => (
                    <NewsItemMemo news={newsItem} key={newsItem.title}/>
                ))
            )}
        </div>
    );
};

export default TopHeadlines;
