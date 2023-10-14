import { INewsData } from './store.ts';

export const SetNewsAC = (news: INewsData[]) => {
    return {
        type: 'SET_NEWS',
        payload: news,
    };
};
export const SetTopHeadlinesAC = (topHeadlines: INewsData[]) => {
    return {
        type: 'SET_TOP_HEADLINES',
        payload: topHeadlines,
    };
};