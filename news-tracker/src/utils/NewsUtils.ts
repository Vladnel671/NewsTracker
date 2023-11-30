import axios from "axios";
import {INewsData} from "../types/types.ts"
import {useCallback} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setLoadingTopHeadlines, setTopHeadlines} from "../store/actions.ts"
import {RootState} from "../types/types.ts"
import {TOP_HEADLINES_URL} from "../constant"

export const fetchNewsData = async (url: string): Promise<INewsData[]> => {
    try {
        const response = await axios.get(url)
        const data = response.data
        return data.articles.filter((news: INewsData) => {
            return !(news.title === '[Removed]' || news.title.trim() === '')
        });
    } catch (error) {
        console.log('Ошибка при выполнении GET-запроса:', error)
        throw error
    }
}

export const fetchTopHeadlinesData = () => {
    const dispatch = useDispatch();
    const {data: news} = useSelector((state: RootState) => state.topHeadlines);

    return useCallback(async () => {
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
    }, [dispatch, news]);
}
