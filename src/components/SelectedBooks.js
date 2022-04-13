import React from 'react';

const SelectedBook = ({name, price, book}) => {


    return (
        <>
            <p>Title: {name} Price: £{price}</p> 
        </>
    );
}

export default SelectedBook;