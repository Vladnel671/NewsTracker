import { PaginationProps } from '@mui/material'

export interface INewsState {
  news: NewsData[]
  isLoading?: boolean
}

export interface NewsData {
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

export interface ICustomPaginationProps extends PaginationProps {
  count: number
  page: number
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void
}

export interface MainNewsProps {
  firstColumnNews: NewsData[]
  secondColumnNews: NewsData[]
  thirdColumnNews: NewsData[]
}

export interface IconProps {
  className?: string
}
