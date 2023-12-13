import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {initialState, INewsData} from '../../types/types'

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

export const {setNews, setLoadingNews, setTopHeadlines, setLoadingTopHeadlines} = newsSlice.actions

export default newsSlice.reducer