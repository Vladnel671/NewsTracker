import {createAsyncThunk, createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit'
import {INewsData, initialState} from '../../types/types'
import {RootState} from "../../store/store.ts";
import {ALL_NEWS_URL, newsAPI, TOP_HEADLINES_URL} from "../../api/API.ts";

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

export const fetchTopHeadlines = createAsyncThunk<void, void, { dispatch: Dispatch; state: RootState }>(
    'news/fetchTopHeadlines',
    async (_, {dispatch, getState}) => {
        const {news} = getState() as RootState;
        if (news.topHeadlines.data.length > 0) {
            return;
        }
        try {
            dispatch(setLoadingTopHeadlines(true));
            const filteredNews = await newsAPI.fetchNewsData(TOP_HEADLINES_URL);
            dispatch(setTopHeadlines(filteredNews));
        } catch (error) {
            console.log('Error executing GET request:', error);
        } finally {
            dispatch(setLoadingTopHeadlines(false));
        }
    }
);

export const fetchNewsByCategory = createAsyncThunk<void, string, { dispatch: Dispatch; state: RootState }>(
    'news/fetchNewsByCategory',
    async (category, {dispatch}) => {
        const URL = `${ALL_NEWS_URL}&q=${category}`;
        try {
            dispatch(setLoadingNews(true));
            const filteredNews = await newsAPI.fetchNewsData(URL);
            dispatch(setNews(filteredNews));
            dispatch(setLoadingNews(false));
        } catch (error) {
            console.log(error);
            dispatch(setLoadingNews(false));
        }
    }
)

export const searchNews = createAsyncThunk<void, string, { dispatch: Dispatch; state: RootState }>(
    'news/searchNews',
    async (keyword, {dispatch}) => {
        const URL = `${ALL_NEWS_URL}&q=${keyword}`
        try {
            dispatch(setLoadingNews(true));
            const filteredNews = await newsAPI.fetchNewsData(URL)
            dispatch(setNews(filteredNews));
            dispatch(setLoadingNews(false))
        } catch (error) {
            console.log(error)
            dispatch(setLoadingNews(false))
        }
    })

export const {setNews, setLoadingNews, setTopHeadlines, setLoadingTopHeadlines} = newsSlice.actions

export default newsSlice.reducer