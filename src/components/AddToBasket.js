import React from 'react';
// Context 
import { ShopContext } from './GlobalState';

export default function AddToBasket(props) {
    return (
        <ShopContext.Consumer>
            {({ basket, addToBasket, removeFromBasket }) => (
                basket.findIndex((basketItem) => {
                    return basketItem.sku === props.product.sku;
                }) < 0 ? <button className="Product-basket-button" onClick={() => addToBasket(props.product)}>Add to basket</button> :
                    <div className="Product-basket-div">
                        <button className="Product-basket-remove-button" onClick={() => removeFromBasket(props.product)}>-</button>
                        {basket[basket.findIndex((basketItem) => { return basketItem.sku === props.product.sku; })].amount}
                        <button className="Product-basket-add-button" onClick={() => addToBasket(props.product)}>+</button>
                    </div>
            )}
        </ShopContext.Consumer>
    )
}
