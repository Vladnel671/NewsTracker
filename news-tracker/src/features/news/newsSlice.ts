import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {INewsData, initialState} from '../../types/types'
import {RootState} from "../../store/store.ts";
import axios from "axios";
import {ALL_NEWS_URL, TOP_HEADLINES_URL} from "../../api/API.ts";

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNews: (state, action: PayloadAction<INewsData[]>) => {
            state.news.data = action.payload
        },
        setLoadingNews: (state, action: PayloadAction<boolean>) => {
            state.news.isLoading = action.payload
        },
        setTopHeadlines: (state, action: PayloadAction<INewsData[]>) => {
            state.topHeadlines.data = action.payload
        },
        setLoadingTopHeadlines: (state, action: PayloadAction<boolean>) => {
            state.topHeadlines.isLoading = action.payload
        },
    },
});

export const fetchNewsData = async (url: string): Promise<INewsData[]> => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        return data.articles.filter((news: INewsData) => {
            return !(news.title === '[Removed]' || news.title.trim() === '');
        });
    } catch (error) {
        console.log('Error executing GET request:', error);
        throw error;
    }
};

export const fetchTopHeadlines = createAsyncThunk(
    'news/fetchTopHeadlines',
    async (_, { dispatch, getState }) => {
        const { news } = getState() as RootState;
        if (news.topHeadlines.data.length > 0) {
            return;
        }
        try {
            dispatch(setLoadingTopHeadlines(true));
            const filteredNews = await fetchNewsData(TOP_HEADLINES_URL);
            dispatch(setTopHeadlines(filteredNews));
        } catch (error) {
            console.log('Error executing GET request:', error);
        } finally {
            dispatch(setLoadingTopHeadlines(false));
        }
    }
);

export const fetchNewsByCategory = createAsyncThunk(
    'news/fetchNewsByCategory',
    async (category: string, { dispatch, getState }) => {
        const URL = `${ALL_NEWS_URL}&q=${category}`;
        try {
            dispatch(setLoadingNews(true));
            const filteredNews = await fetchNewsData(URL);
            dispatch(setNews(filteredNews));
            dispatch(setLoadingNews(false));
            navigate('/allnews');
        } catch (error) {
            console.log(error);
            dispatch(setLoadingNews(false));
        }
    }
);

export const SearchData = (async () => {
    if (keyword.trim() === '') {
        navigate('/allnews')//return
    }

    navigate('/allnews')
    const URL = `${ALL_NEWS_URL}&q=${keyword}`
    try {
        dispatch(setLoadingNews(true));
        const filteredNews = await fetchNewsData(URL)
        dispatch(setNews(filteredNews));
        dispatch(setLoadingNews(false))
        setKeyword("")
    } catch (error) {
        console.log(error)
        dispatch(setLoadingNews(false))
    }
}, [keyword, dispatch])

export const {setNews, setLoadingNews, setTopHeadlines, setLoadingTopHeadlines} = newsSlice.actions

export default newsSlice.reducer