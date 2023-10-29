import {createStore} from 'redux';
import {initialState, rootReducer} from "../types/types.ts";

export const store = createStore(rootReducer, initialState);

const handleStateChange = () => {
    const initialState = store.getState()
    console.log('State changed', initialState);
};

store.subscribe(handleStateChange);