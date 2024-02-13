import { PaginationProps } from '@mui/material'

export interface INewsState {
  news: INewsData[]
  isLoading?: boolean
}

export interface INewsData {
  author: string
  title: string
  description: string
  urlToImage: string
  url: string
  publishedAt: string
  source: { id: string; name: string }
}

export const initialState = {
  allNews: {
    news: [],
  } as INewsState,
  topHeadlines: {
    news: [],
  } as INewsState,
}

export interface INewsImageProps {
  src: string
  alt: string
}

export interface CustomPaginationProps extends PaginationProps {
  count: number
  page: number
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void
}

export interface MainNewsBlockProps {
  firstColumnNews: INewsData[]
  secondColumnNews: INewsData[]
  thirdColumnNews: INewsData[]
  isLoading: boolean
}
