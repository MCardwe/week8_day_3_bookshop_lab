import React from 'react';
import Basket from './Basket';
import styled from 'styled-components';

const Header = ({basketClick}) => {

    const Title = styled.h1`
        text-align: center;
    `
    const Area = styled.div`
        display: grid;
        grid-template-columns: 7fr 3fr;
        
    `

    return (
        <Area>
        <Title>CodeClan BookShop</Title>
        <Basket basketClick={basketClick}/>
        </Area>
    );
}

export default Header;