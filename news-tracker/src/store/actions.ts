import { INewsData } from './store.ts';
import { Action } from './store.ts';

export interface SetNewsAction extends Action {
    type: 'SET_NEWS';
    payload: INewsData[];
}

export interface SetTopHeadlinesAction extends Action {
    type: 'SET_TOP_HEADLINES';
    payload: INewsData[];
}

export type ActionTypes = SetNewsAction | SetTopHeadlinesAction;

export const SetNewsAC = (news: INewsData[]): SetNewsAction => {
    return {
        type: 'SET_NEWS',
        payload: news,
    };
};

export const SetTopHeadlinesAC = (topHeadlines: INewsData[]): SetTopHeadlinesAction => {
    return {
        type: 'SET_TOP_HEADLINES',
        payload: topHeadlines,
    };
};