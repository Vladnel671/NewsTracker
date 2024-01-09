import axios from "axios";
import {INewsData} from "../types/types.ts";

export const BASE_URL = 'https://run.mocky.io/v3/0f6c23c2-a948-4914-aabe-bad66d52dbf3'

export const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
});

export const newsAPI = {
    fetchNewsData: async (BASE_URL: string): Promise<INewsData[]> => {
        try {
            const response = await instance.get(BASE_URL);
            console.log(response)
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