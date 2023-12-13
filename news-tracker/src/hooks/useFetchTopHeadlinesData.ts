import {useDispatch, useSelector} from "react-redux"
import {useCallback} from "react"

import {TOP_HEADLINES_URL} from "../constant"
import {fetchNewsData} from "../utils/NewsUtils.ts"
import {setLoadingTopHeadlines, setTopHeadlines} from "../features/news/newsSlice.ts";
import {RootState} from "../store/store.ts";

export const useFetchTopHeadlinesData = () => {
    const dispatch = useDispatch()
    const {data: news} = useSelector((state: RootState) => state.news.topHeadlines)

    return useCallback(async () => {
        if (news.length > 0) {
            return;
        }
        try {
            dispatch(setLoadingTopHeadlines(true));
            const filteredNews = await fetchNewsData(TOP_HEADLINES_URL)
            dispatch(setTopHeadlines(filteredNews))
        } catch (error) {
            console.log('Ошибка при выполнении GET-запроса:', error)
        } finally {
            dispatch(setLoadingTopHeadlines(false))
        }
    }, [dispatch, news])
}