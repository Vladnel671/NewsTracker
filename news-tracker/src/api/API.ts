import axios from "axios";
import {INewsData} from "../types/types.ts";

export const BASE_URL = import.meta.env.VITE_APP_BASE_URL
export const TOP_HEADLINES_URL = import.meta.env.VITE_APP_TOP_HEADLINES_URL
export const ALL_NEWS_URL = import.meta.env.VITE_APP_ALL_NEWS_URL

export const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
});

export const newsAPI = {
    fetchNewsData: async (url: string): Promise<INewsData[]> => {
        try {
            console.log(BASE_URL)
            const response = await instance.get(BASE_URL + url);
            const data = response.data;
            return data.articles.filter((news: INewsData) => {
                return !(news.title === '[Removed]' || news.title.trim() === '');
            });
        } catch (error) {
            console.log('Error executing GET request:', error);
            throw error;
        }
    }
}