import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { loadBooks } from 'store/books/actions';
import {getBooks} from 'store/books/selectors';
import {BooksList} from 'components/BooksList';
import {Loader} from 'components/Loader';

export const BooksListContainer = () => {
    const books = useSelector(getBooks);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(loadBooks())
    },[dispatch])

    return (
        <Loader>
            <BooksList books={books} />
        </Loader>
    )
}