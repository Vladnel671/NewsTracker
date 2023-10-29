import axios from "axios";
import {INewsData} from "../types/types.ts";
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