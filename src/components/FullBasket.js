import React from 'react';
// Icons
import { FaTrash } from "react-icons/fa";
// Context
import { ShopContext } from './GlobalState';
// Components
import AddToBasket from './AddToBasket';

export default function FullBasket() {
    return (
        <ShopContext.Consumer>
            {({ basket, showBasket, removeFromBasket }) => (
                showBasket ? <div className="Basket-flyin" data-testid="flyout" >
                    {basket.length > 0 ? <div>
                        {basket.map((item) => {
                            return (
                                <div className="Basket-container" key={item.sku}>
                                    <div className="Basket-product-image"><img src={item.image} alt="" /></div>
                                    <div className="Basket-product-summary-title">{item.title}</div>
                                    <div className="Basket-product-summary-price">£ {item.amount * item.price}</div>
                                    <div className="Basket-product-summary-actions"><AddToBasket product={item} /></div>
                                    <div className="Basket-product-summary-delete">
                                        <button className="Basket-product-remove-button" aria-labelledby="button-label" onClick={() => removeFromBasket(item, item.amount)}><div hidden id="button-label">'delete from basket'</div><FaTrash data-testid="fa-trash" /></button>
                                    </div>
                                </div>
                            )
                        })}
                    </div> : null}
                </div> : null
            )}
        </ShopContext.Consumer>
    )
}

