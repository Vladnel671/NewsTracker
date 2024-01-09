import axios from "axios";
import {INewsData} from "../types/types.ts";

export const BASE_URL = import.meta.env.VITE_APP_BASE_MOCK_URL
export const TOP_HEADLINES = import.meta.env.VITE_APP_MOCK_TOP_HEADLINES
export const ALL_NEWS_URL = import.meta.env.VITE_APP_ALL_NEWS_MOCK_URL

export const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
});

export const newsAPI = {
    fetchNewsData: async (URL: string): Promise<INewsData[]> => {
        try {
            const response = await instance.get(BASE_URL + URL);
            const data = response.data;
            return data.filter((news: INewsData) => {
                return !(news.title === '[Removed]' || news.title.trim() === '');
            });
        } catch (error) {
            console.log('Error executing GET request:', error);
            throw error;
        }
    }
}