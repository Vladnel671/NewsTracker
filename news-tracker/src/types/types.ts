import {PaginationProps} from "@mui/material"

export interface INewsState {
    data: INewsData[]
    isLoading: boolean
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

export const initialState: { news: INewsState; topHeadlines: INewsState } = {
    news: {
        data: [],
        isLoading: false
    },
    topHeadlines: {
        data: [],
        isLoading: false
    }
}

export interface ILazyImageProps {
    src: string
    alt: string
    className?: string
    width?: string
    height?: string
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

export interface MultiCategoryNewsProps {
    firstColumnMultiCategoryNews: INewsData[]
    isLoading: boolean
}