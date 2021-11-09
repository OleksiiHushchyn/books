import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentBook } from 'store/books/selectors';
import { loadBookById } from 'store/books/actions';
import { Loader } from 'components/Loader';
import { StyledLink } from 'components/utils';

export const Book = () => {
    const { id } = useParams()
    const book = useSelector(getCurrentBook)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadBookById(Number.parseInt(id)))
    }, [dispatch])

    return (
        <Loader>
            <div>
                <div>Book title: {book.title}</div>
                <div>Author: <StyledLink to={`/author/${book.authorId}`}>{book.author}</StyledLink></div>
            </div>
        </Loader>
    )
}