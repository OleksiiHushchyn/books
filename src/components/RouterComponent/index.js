import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Book } from 'components/Book';
import {BooksListContainer} from 'components/BookListContainer';
import {AuthorBookListContainer} from "../AuthorBookListContainer";

const RouterComponent = () => (
    <>
        <Routes>
            <Route path='/' element={<BooksListContainer />} />
            <Route path='book/:id' element={<Book />}/>
            <Route path='author/:id' element={<AuthorBookListContainer />}/>
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    </>
)

export default RouterComponent;