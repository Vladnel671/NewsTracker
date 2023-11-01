import React, {useEffect, useCallback} from 'react'
import styles from '../styles/main.module.scss'
import NewsItem from "../components/NewsItem.tsx"
import {fetchNewsData} from "../utils/NewsUtils.ts"
import {useDispatch, useSelector} from "react-redux"
import {setLoadingTopHeadlines, setTopHeadlines} from "../store/actions.ts"
import {INewsData, RootState} from "../types/types.ts"
import {TOP_HEADLINES_URL} from "../constant"
import MainLoadingScreen from "../components/MainLoadingScreen.tsx"

const TopHeadlines: React.FC = () => {

    const NewsItemMemo = React.memo(NewsItem);
    const dispatch = useDispatch();

    const {data: news, isLoading} = useSelector((state: RootState) => state.topHeadlines);

    const getData = useCallback(async () => {
        if (news.length > 0) {
            return
        }
        try {
            dispatch(setLoadingTopHeadlines(true))
            const filteredNews = await fetchNewsData(TOP_HEADLINES_URL)
            dispatch(setTopHeadlines(filteredNews))
            dispatch(setLoadingTopHeadlines(false))
        } catch (error) {
            console.log('Ошибка при выполнении GET-запроса:', error)
        } finally {
            dispatch(setLoadingTopHeadlines(false))
        }
    }, [dispatch])

    useEffect(() => {
        if (!news.length) {
            getData()
        }
    }, [getData, news.length])

    if (!news.length || isLoading) return <MainLoadingScreen/>

    return (
        <div className={styles.topHeadlinesNewsBlock}>
                {news.map((newsItem: INewsData) => (
                    <NewsItemMemo news={newsItem} key={newsItem.title}/>
                ))}
            <div className={styles.mainNewsAndTopStoriesBlock}>
                <div>MainNews</div>
                <div>Top Stories</div>
            </div>
            <div>Other news...</div>
        </div>
    );
};

export default TopHeadlines;