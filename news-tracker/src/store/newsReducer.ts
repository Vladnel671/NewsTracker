import {ActionTypes} from "./actions.ts";
import {INewsState, initialState} from "../types/types.ts";

export const newsReducer = (state = initialState, action: ActionTypes): {
    news: INewsState;
    topHeadlines: INewsState
} => {
    switch (action.type) {
        case 'SET_NEWS':
            return {
                ...state,
                news: {
                    data: action.payload,
                    isLoading: state.news.isLoading
                },
            }
        case 'SET_TOP_HEADLINES':
            return {
                ...state,
                topHeadlines: {
                    data: action.payload,
                    isLoading: state.topHeadlines.isLoading
                },
            }
        case "SET_LOADING_NEWS":
            return {
                ...state,
                news: {
                    data: state.news.data,
                    isLoading: action.isLoading
                }
            }
        case "SET_LOADING_TOP_HEADLINES":
            return {
                ...state,
                topHeadlines: {
                    data: state.topHeadlines.data,
                    isLoading: action.isLoading
                }
            }
        default:
            return state;
    }
};

export default newsReducer;