import React from 'react';
import SelectedBook from './SelectedBooks';

const BasketList = ({books}) => {
    const bookNodes = books.map((book, index) => {
        return <SelectedBook key={index} name={book.name} price={book.price} book={book}/>
    }) 

    return (
        <div class="list">
            {bookNodes}
        </div>
    );
}

export default BasketList;