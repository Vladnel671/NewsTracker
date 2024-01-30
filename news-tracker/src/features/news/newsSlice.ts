import { createAsyncThunk, createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit"
import { ALL_NEWS_URL, api, TOP_HEADLINES } from "../../api/API.ts"
import { RootState } from "../../store/store.ts"
import { INewsData, initialState } from "../../types/types"

const newsSlice = createSlice({
  name: "news",
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

export const fetchTopHeadlines = createAsyncThunk<
  void,
  void,
  { dispatch: Dispatch; state: RootState }
>("news/fetchTopHeadlines", async (_, { dispatch, getState }) => {
  const { news } = getState() as RootState
  if (news.topHeadlines.news.length > 0) {
    return
  }
  try {
    const data = await api.endpoints.fetchNewsData(TOP_HEADLINES).unwrap()
    if (data) {
      dispatch(setTopHeadlines(data))
    }
  } catch (error) {
    console.log("Error executing GET request:", error)
  }
})

export const fetchNewsByCategory = createAsyncThunk<
  void,
  string,
  { dispatch: Dispatch; state: RootState }
>("news/fetchNewsByCategory", async (_, { dispatch }) => {
  try {
    const result = api.endpoints.fetchNewsData.initiate(ALL_NEWS_URL)
    if (result.data) {
      dispatch(setTopHeadlines(result.data))
    }
  } catch (error) {
    console.log(error)
  }
})

export const searchNews = createAsyncThunk<void, string, { dispatch: Dispatch; state: RootState }>(
  "news/searchNews",
  async (_, { dispatch }) => {
    try {
      const result = api.endpoints.fetchNewsData.initiate(ALL_NEWS_URL)
      if (result.data) {
        dispatch(setTopHeadlines(result.data))
      }
    } catch (error) {
      console.log(error)
    }
  }
)

export const { setNews, setTopHeadlines } = newsSlice.actions

export default newsSlice.reducer
