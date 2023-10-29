import {
    INewsData,
    SetLoadingNewsAction,
    SetLoadingTopHeadlinesAction,
    SetNewsAction,
    SetTopHeadlinesAction
} from "../types/types.ts";

export const setNews = (news: INewsData[]): SetNewsAction => {
    return {
        type: 'SET_NEWS',
        payload: news,
    };
};

export const setTopHeadlines = (topHeadlines: INewsData[]): SetTopHeadlinesAction => {
    return {
        type: 'SET_TOP_HEADLINES',
        payload: topHeadlines,
    };
};

export const setLoadingNews = (isLoading: boolean): SetLoadingNewsAction => {
    return {
        type: 'SET_LOADING_NEWS',
        isLoading
    };
};

export const setLoadingTopHeadlines = (isLoading: boolean): SetLoadingTopHeadlinesAction => {
    return {
        type: 'SET_LOADING_TOP_HEADLINES',
        isLoading
    };
};