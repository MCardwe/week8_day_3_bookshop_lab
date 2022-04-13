import MainPage from "../containers/MainPage";
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, mount, configure} from 'enzyme';

describe("MainPage", () => {

    configure({adapter: new Adapter()})

    let container;

    beforeEach(() => {
        container = mount(<MainPage/>)
        const testbooks = {name: "The Vanishing Half", price: 9.99}
    })

    it('should be able to add a book', () => {
        const ourFunction = container.find(handleAddToBasket());
        ourFunction(testbooks);
        const basket = container.find("userBasket");
        expect(basket.length()).toEqual(1);
        
    })

})