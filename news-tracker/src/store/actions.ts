import {INewsData} from './store.ts';
import {Action} from './store.ts';

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