import {INewsData} from "../store/store.ts";
import axios from "axios";

export const fetchNewsData = async (url: string): Promise<INewsData[]> => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        return data.articles.filter((news: INewsData) => {
            return !(news.title === '[Removed]' || news.title.trim() === '');
        });
    } catch (error) {
        console.log('Ошибка при выполнении GET-запроса:', error);
        return [];
    }
};