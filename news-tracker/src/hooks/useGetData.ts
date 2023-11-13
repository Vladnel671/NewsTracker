import {useCallback} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {fetchNewsData} from "../utils/NewsUtils.ts"
import {setLoadingTopHeadlines, setTopHeadlines} from "../store/actions.ts"
import {RootState} from "../types/types.ts"
import {TOP_HEADLINES_URL} from "../constant"

export const useGetData = () => {
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
