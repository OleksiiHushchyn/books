import {createReducer} from 'redux-act';
import {loadBookByIdSucceeded, loadBooksSucceeded, loadBooksFailed, loadBookByIdFailed, loadBooksByAuthorSucceeded, loadBooksByAuthorFailed} from './actions';

const initialState = {
    books: [],
    currentBook: {},
    isError: false,
}

export const booksReducer = createReducer({
    [loadBooksSucceeded]: (state, data) => ({...state, books: data}),
    [loadBooksFailed]: (state) => ({...state, isError: false}),
    [loadBookByIdSucceeded]: (state, data) => ({...state, currentBook: data}),
    [loadBookByIdFailed]: (state) => ({...state, isError: false}),
    [loadBooksByAuthorSucceeded]: (state, data) => ({...state, books: data}),
    [loadBooksByAuthorFailed]: (state) => ({...state, isError: false})
},initialState)