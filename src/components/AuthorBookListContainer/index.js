import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { loadBooksByAuthorId } from 'store/books/actions';
import {getBooks} from 'store/books/selectors';
import {BooksList} from 'components/BooksList';
import {Loader} from 'components/Loader';
import {useParams} from "react-router-dom";

export const AuthorBookListContainer = () => {
    const { id } = useParams()
    const books = useSelector(getBooks);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(loadBooksByAuthorId(Number.parseInt(id)))
    },[dispatch])

    return (
        <Loader>
            <div>
                <>Author: {books && books[0] && books[0].author}</>
                <BooksList books={books} />
            </div>
        </Loader>
    )
}