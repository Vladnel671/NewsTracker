import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { INewsData } from "../types/types.ts"

export const BASE_URL = import.meta.env.VITE_APP_BASE_MOCK_URL
export const TOP_HEADLINES = import.meta.env.VITE_APP_MOCK_TOP_HEADLINES
export const ALL_NEWS_URL = import.meta.env.VITE_APP_ALL_NEWS_MOCK_URL

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchNewsData: builder.query<INewsData[], string>({
      query: (url) => url,
      transformResponse: (rawData: INewsData[]) =>
        rawData.filter((news) => !(news.title === "[Removed]" || news.title.trim() === "")),
    }),
  }),
})

export const { useFetchNewsDataQuery } = api
