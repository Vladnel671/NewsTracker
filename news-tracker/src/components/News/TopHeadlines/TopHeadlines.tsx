import React, {useEffect, useCallback} from 'react';
import styles from '../../../styles/main.module.scss';
import NewsItem from "../NewsItem/NewsItem.tsx";
import {INewsData, RootState} from "../../../store/store.ts";
import {fetchNewsData} from "../../../utils/NewsUtils.ts";
import {useDispatch, useSelector} from "react-redux";
import {setLoadingTopHeadlines, setTopHeadlines} from "../../../store/actions.ts";
import {TOP_HEADLINES_URL} from "../../../../../config.ts";
import Masonry from 'react-masonry-css';

const TopHeadlines: React.FC = () => {

    const breakpointColumnsObj = {
        default: 3,
        1250: 2,
        830: 1
    };

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

    if (!news.length || isLoading) return <div className={styles.spinnerBlock}>
        <span className={styles.spinner}></span>
    </div>

    return (
        <div className={styles.topHeadlinesNewsBlock}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className={styles.masonryGrid}
                columnClassName={styles.masonryGridColumn}
            >
                {news.map((newsItem: INewsData) => (
                    <NewsItemMemo news={newsItem} key={newsItem.title}/>
                ))}
            </Masonry>
        </div>
    );
};

export default TopHeadlines;
