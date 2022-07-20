import React from 'react';
// Icon
import { FaShoppingBasket } from "react-icons/fa";
// Context
import { ShopContext } from './GlobalState';

export default function Basket() {
    return (
        <ShopContext.Consumer>
            {({ basket, basketClick }) => (
                <div>
                    <button className="Basket-button" onClick={() => basketClick()} aria-labelledby="basket-button"><FaShoppingBasket className='Basket-icon' /><span hidden id='basket-button'>basket</span><div data-testid="basket-count">{basket.length}</div></button>
                </div>
            )}
        </ShopContext.Consumer>
    )
}
