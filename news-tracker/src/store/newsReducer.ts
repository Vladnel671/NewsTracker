import {initialState} from "./store.ts";
import {NewsAction} from "./actions.ts";

export const newsReducer = (state = initialState, action: NewsAction) => {
    switch (action.type) {
        case 'FETCH_AUTHOR':
            return { ...state, author: action.payload };
        case 'FETCH_TITLE':
            return { ...state, title: action.payload };
        case 'FETCH_DESCRIPTION':
            return { ...state, description: action.payload };
        case 'FETCH_URL_TO_IMAGE':
            return { ...state, urlToImage: action.payload };
        case 'FETCH_URL':
            return { ...state, url: action.payload };
        case 'FETCH_PUBLISHED_AT':
            return { ...state, publishedAt: action.payload };
        case 'FETCH_SOURCE':
            return { ...state, source: { name: action.payload } };
        default:
            return state;
    }
};