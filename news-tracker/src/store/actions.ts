import { INewsData } from './store.ts';

export const SetNewsAC = (news: INewsData[]) => {
    return {
        type: 'SET_NEWS',
        payload: news,
    };
};