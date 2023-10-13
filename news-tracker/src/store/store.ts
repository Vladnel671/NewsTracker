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

export const initialState: INewsData = {
    author: "",
    title: "",
    description: "",
    urlToImage: "",
    url: "",
    publishedAt: "",
    source: {name: ""}
};

const rootReducer = newsReducer;
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, initialState);

const handleStateChange = () => {
    //const currentState = store.getState();
    console.log('State changed');
};

store.subscribe(handleStateChange);

