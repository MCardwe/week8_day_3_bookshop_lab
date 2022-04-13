import React from 'react';
import styled from 'styled-components';


const Basket = ({basketClick}) => {

    const handleClick = () => {
        basketClick()
    }

    const Button = styled.button`
        padding: .5em;
        background-color: red;
    `

    return (
        <Button onClick={handleClick}>Basket</Button>
    );
}

export default Basket;