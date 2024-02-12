import { configureStore } from '@reduxjs/toolkit'

import newsReducer from '../features/news/newsSlice.ts'
import { api } from '../services/NewsService.ts'

export const store = configureStore({
  reducer: {
    news: newsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
