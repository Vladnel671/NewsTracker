import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { INewsData, initialState } from '../../types/types'

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INewsData[]>) => {
      state.allNews.news = action.payload
    },
    setTopHeadlines: (state, action: PayloadAction<INewsData[]>) => {
      state.topHeadlines.news = action.payload
    },
  },
})

export const { setNews, setTopHeadlines } = newsSlice.actions

export default newsSlice.reducer
