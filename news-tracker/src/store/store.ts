import newsReducer from '../features/news/newsSlice.ts'
import {configureStore} from '@reduxjs/toolkit';
export const store = configureStore({
    reducer: {
        news: newsReducer,
    },
})
export type RootState = ReturnType<typeof store.getState>
