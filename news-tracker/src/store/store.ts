import {newsReducer} from "./newsReducer.ts";
import {createStore} from 'redux';

export interface INewsData {
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    url: string;
    publishedAt: string;
    source: { name: string };
}

export const initialState: { news: INewsData[] } = {
    news: [],
};

const rootReducer = newsReducer;
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, initialState);

const handleStateChange = () => {
    const initialState = store.getState()
    console.log('State changed', initialState);
};

store.subscribe(handleStateChange);