import React, {useState, useEffect} from 'react';
import Header from '../components/Header';
import BookList from '../components/BookList';
import BasketList from '../components/BasketList';

import UserBasketContext from '../contexts/UserBasketContext';

const MainPage = () => {

    const [basketClicked, setBasketClicked] = useState(false);
    const [userBasket, setUserBasket] = useState([]);
    const [items, setItems] = useState([
        {name: "The Vanishing Half", price: 9.99},
        {name: "The Eyre Affair", price: 4.99},
        {name: "Game of Kings", price: 4.50},
        {name: "Hello Beautiful World", price: 8.99},
        {name: "Emily", price: 3.99},
        {name: "Little Lady, Big Apple", price: 2.99}
    ])

    const handleBasketClick = () => {
        setBasketClicked(!basketClicked);
    }

    const handleAddToBasket = (book) => {
        const basketCopy = [...userBasket];
        basketCopy.push(book);
        setUserBasket(basketCopy);
    }

    return (
        <div class="grid-container">
            <Header basketClick={handleBasketClick} />
            <UserBasketContext.Provider value={{userBasket, handleAddToBasket}}>
            { !basketClicked ? <BookList books={items}/> : null }
            { basketClicked ? <BasketList books={userBasket}/> : null }
            </UserBasketContext.Provider>
        </div>
        
    );
}

export default MainPage;