import React from 'react';
// Context
import { ShopContext } from './GlobalState';

export default function Basket() {
    return (
        <ShopContext.Consumer>
            {({ basket }) => (
                <button className="Product-basket-button" onClick={() => { }}>Basket <div data-testid="basket-count">{basket.length}</div></button>
            )}
        </ShopContext.Consumer>
    )
}
