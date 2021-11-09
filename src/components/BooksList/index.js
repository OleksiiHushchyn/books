import React from 'react';
import {StyledLink} from 'components/utils';
import styled from 'styled-components';

const StyledUl = styled('ul')`
  margin: 0;
`
export const BooksList = ({books}) => {
    return (
            <StyledUl>
                {
                    books.map((book) =>{
                        return <li key={book.id}><StyledLink to={`/book/${book.id}`}>{book.title}</StyledLink></li>
                    })
                }
            </StyledUl>
    )
}