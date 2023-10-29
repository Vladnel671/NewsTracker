import newsReducer from "../store/newsReducer.ts";

export const rootReducer = newsReducer;
export type RootState = ReturnType<typeof rootReducer>;

export interface Action {
    type: string;
}

export interface INewsData {
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    url: string;
    publishedAt: string;
    source: { name: string };
}

export interface INewsState {
    data: INewsData[];
    isLoading: boolean;
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
};

export interface ILazyImageProps {
    src: string;
    alt: string;
}

export interface SetNewsAction extends Action {
    type: 'SET_NEWS';
    payload: INewsData[];
}

export interface SetTopHeadlinesAction extends Action {
    type: 'SET_TOP_HEADLINES';
    payload: INewsData[];
}

export interface SetLoadingNewsAction extends Action {
    type: 'SET_LOADING_NEWS';
    isLoading: boolean;
}

export interface SetLoadingTopHeadlinesAction extends Action {
    type: 'SET_LOADING_TOP_HEADLINES';
    isLoading: boolean;
}

export type ActionTypes =
    | SetNewsAction
    | SetTopHeadlinesAction
    | SetLoadingNewsAction
    | SetLoadingTopHeadlinesAction;