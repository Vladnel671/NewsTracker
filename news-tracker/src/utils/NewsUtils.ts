import axios from "axios"
import {INewsData} from "../types/types.ts"
import {ALL_NEWS_URL, API_KEY} from "../constant"
import {setLoadingNews, setNews} from "../features/news/newsSlice.ts"

export const fetchNewsData = async (url: string): Promise<INewsData[]> => {
    try {
        const response = await axios.get(url)
        const data = response.data
        return data.articles.filter((news: INewsData) => {
            return !(news.title === '[Removed]' || news.title.trim() === '')
        })
    } catch (error) {
        console.log('Ошибка при выполнении GET-запроса:', error)
        throw error
    }
}

export const fetchNewsByCategory = async (category: string, dispatch: any, navigate: any) => {
    const URL = `${ALL_NEWS_URL}${API_KEY}&q=${category}`
    try {
        dispatch(setLoadingNews(true))
        const filteredNews = await fetchNewsData(URL)
        dispatch(setNews(filteredNews))
        dispatch(setLoadingNews(false))
        navigate('/allnews')
    } catch (error) {
        console.log(error)
        dispatch(setLoadingNews(false))
    }
}

export function scrollToTop() {
    window.scrollTo(0, 0)
}