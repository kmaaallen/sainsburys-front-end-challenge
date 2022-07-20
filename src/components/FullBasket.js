import React from 'react';
// Icons
import { FaMinusCircle, FaTimesCircle } from "react-icons/fa";
// Context
import { ShopContext } from './GlobalState';

export default function FullBasket() {
    return (
        <ShopContext.Consumer>
            {({ basket, showBasket, removeFromBasket }) => (
                showBasket ? <div className="Basket-flyin" data-testid="flyout" >
                    {basket.length > 0 ? <div>
                        {basket.map((item) => {
                            return (
                                <div className="Basket-product-summary" key={item.sku}>
                                    <img src={item.image} alt="" className="Basket-product-image" />
                                    <div className="Basket-product-summary-title ">{item.title}</div>
                                    <div className="Basket-product-summary-amount ">x {item.amount}</div>
                                    <div className="Basket-product-summary-price">£ {item.amount * item.price}</div>
                                    <button className="Basket-product-remove-button" onClick={() => removeFromBasket(item)}>{item.amount > 1 ? <FaMinusCircle data-testid="minus-circle" /> : <FaTimesCircle data-testid="times-circle" />}</button>
                                </div>
                            )
                        })}
                    </div> : <div className="Basket-product-summary">Your basket is empty</div>}
                </div> : null
            )}
        </ShopContext.Consumer>
    )
}

