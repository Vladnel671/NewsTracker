import {initialState} from './store.ts';

export const newsReducer = (state = initialState, action: any) => {
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