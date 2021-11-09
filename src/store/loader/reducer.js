import {createReducer} from 'redux-act';
import {startAsyncAction, finishAsyncAction} from './actions';

const initialState = {
    isLoading: false,
}

export const loaderReducer = createReducer({
    [startAsyncAction]: (state) => ({...state, isLoading: true}),
    [finishAsyncAction]: (state, data) => ({...state, isLoading: false}),
},initialState)