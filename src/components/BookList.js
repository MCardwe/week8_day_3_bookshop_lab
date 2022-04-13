import React from 'react';
import Book from './Book';

const BookList = ({books}) => {
    const bookNodes = books.map((book, index) => {
        return <Book key={index} name={book.name} price={book.price} book={book}/>
    }) 

    return (
        <div class="list">
        {bookNodes}
        </div>
    );
}

export default BookList;