import {createAsyncThunk, createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit'
import {INewsData, initialState} from '../../types/types'
import {RootState} from "../../store/store.ts";
import {ALL_NEWS_URL, api, TOP_HEADLINES, useFetchNewsDataQuery} from "../../api/API.ts";

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNews: (state, action: PayloadAction<INewsData[]>) => {
            state.allNews.news = action.payload
        },
        setTopHeadlines: (state, action: PayloadAction<INewsData[]>) => {
            state.topHeadlines.news = action.payload
        }
    },
});

export const fetchTopHeadlines = createAsyncThunk<void, void, { dispatch: Dispatch; state: RootState }>(
    'news/fetchTopHeadlines',
    async (_, {dispatch, getState}) => {
        const {news} = getState() as RootState;
        if (news.topHeadlines.news.length > 0) {
            return;
        }
        try {
            const response = await useFetchNewsDataQuery(TOP_HEADLINES);
            if (response.data) {
                dispatch(setTopHeadlines(response.data));
            }
        } catch (error) {
            console.log('Error executing GET request:', error);
        }
    }
);

export const fetchNewsByCategory = createAsyncThunk<void, string, { dispatch: Dispatch; state: RootState }>(
    'news/fetchNewsByCategory',
    async (_, {dispatch}) => {
        try {
            const {data: filteredNews} = await api.useFetchNewsDataQuery(ALL_NEWS_URL);
            if (filteredNews) {
                dispatch(setNews(filteredNews));
            }
        } catch (error) {
            console.log(error);
        }
    }
)

export const searchNews = createAsyncThunk<void, string, { dispatch: Dispatch; state: RootState }>(
    'news/searchNews',
    async (_, {dispatch}) => {
        try {
            const {data: filteredNews} = await api.useFetchNewsDataQuery(ALL_NEWS_URL);
            if (filteredNews) {
                dispatch(setNews(filteredNews));
            }
        } catch (error) {
            console.log(error)
        }
    })

export const {setNews, setTopHeadlines} = newsSlice.actions

export default newsSlice.reducer