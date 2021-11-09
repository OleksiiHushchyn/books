import { put, takeEvery } from 'redux-saga/effects';
import { apiCall } from 'utils';
import {booksData} from 'data';
import {
    loadBooks,
    loadBooksSucceeded,
    loadBooksFailed,
    loadBookById,
    loadBookByIdSucceeded,
    loadBookByIdFailed, loadBooksByAuthorSucceeded, loadBooksByAuthorFailed, loadBooksByAuthorId
} from './actions';
import {startAsyncAction, finishAsyncAction} from 'store/loader/actions';

function* fetchBooks (){
    try{
        yield put(startAsyncAction())
        const data = yield apiCall(booksData);
        yield put(loadBooksSucceeded(data))
        yield put(finishAsyncAction())
    }catch (e){
        yield put(loadBooksFailed(e))
    }
}

function* fetchBookById ({payload}){
    try{
        yield put(startAsyncAction())
        const data = yield apiCall(booksData.find((book) => book.id === payload));
        yield put(loadBookByIdSucceeded(data))
        yield put(finishAsyncAction())
    }catch (e){
        yield put(loadBookByIdFailed(e))
    }
}

function* fetchBooksByAuthorId ({payload}){
    try{
        yield put(startAsyncAction())
        const data = yield apiCall(booksData.filter((book) => book.authorId === payload));
        yield put(loadBooksByAuthorSucceeded(data))
        yield put(finishAsyncAction())
    }catch (e){
        yield put(loadBooksByAuthorFailed(e))
    }
}

export default function* booksSaga(){
    yield takeEvery(loadBooks, fetchBooks)
    yield takeEvery(loadBookById, fetchBookById)
    yield takeEvery(loadBooksByAuthorId, fetchBooksByAuthorId)
}