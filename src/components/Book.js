import React from "react";
import { useContext } from "react";
import UserBasketContext from "../contexts/UserBasketContext";

const Book = ({name , price, book}) => {

    const {handleAddToBasket} = useContext(UserBasketContext)

    const handleClick = () => {
        handleAddToBasket(book)
    }

    return(
        <>
        <p>Title: {name} Price: £{price} <button value={book} onClick={handleClick}>Add to Basket</button></p>    
        </>
    )
};

export default Book;