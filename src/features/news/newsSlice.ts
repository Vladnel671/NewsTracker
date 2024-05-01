import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { NewsData, initialState } from '../../types/types'

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<NewsData[]>) => {
      state.allNews.news = action.payload
    },
    setTopHeadlines: (state, action: PayloadAction<NewsData[]>) => {
      state.topHeadlines.news = action.payload
    },
  },
})

export const { setNews, setTopHeadlines } = newsSlice.actions

export default newsSlice.reducer
