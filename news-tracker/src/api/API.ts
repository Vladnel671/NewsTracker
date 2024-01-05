import axios from "axios";

export const BASE_URL = import.meta.env.BASE_URL
export const TOP_HEADLINES_URL = import.meta.env.VITE_APP_TOP_HEADLINES_URL
export const ALL_NEWS_URL = import.meta.env.VITE_APP_ALL_NEWS_URL

export const newsAPI = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
});

newsAPI.get = async () => {
    try {
        const response = await newsAPI.get('/articles/');
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
};