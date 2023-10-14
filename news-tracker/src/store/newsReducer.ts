import {initialState} from './store.ts';
import {ActionTypes} from "./actions.ts";

export const newsReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'SET_NEWS':
            return {
                ...state,
                news: action.payload,
            }
        case 'SET_TOP_HEADLINES':
            return {
                ...state,
                topHeadlines: action.payload,
            };
        default:
            return state;
    }
};

export default newsReducer;