import {createAction} from "redux-act";

export const loadBooks = createAction('LOAD_BOOKS')
export const loadBooksSucceeded = createAction('LOAD_BOOKS_SUCCEEDED ')
export const loadBooksFailed = createAction('LOAD_BOOKS_FAILED')

export const loadBookById = createAction('LOAD_BOOK_BY_ID')
export const loadBookByIdSucceeded = createAction('LOAD_BOOK_BY_ID_SUCCEEDED ')
export const loadBookByIdFailed = createAction('LOAD_BOOK_BY_ID_FAILED')

export const loadBooksByAuthorId = createAction('LOAD_BOOK_BY_AUTHOR_ID')
export const loadBooksByAuthorSucceeded = createAction('LOAD_BOOK_BY_AUTHOR_ID_SUCCEEDED ')
export const loadBooksByAuthorFailed = createAction('LOAD_BOOK_BY_AUTHOR_ID_FAILED')