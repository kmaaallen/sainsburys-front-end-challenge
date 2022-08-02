import React from 'react'
// Components
import Product from './Product';
// Context
import { ShopContext } from './GlobalState';

export default function Products() {
    return (
        <ShopContext.Consumer>
            {({ products, basket, showBasket }) => (
                <div>
                    {showBasket ? <div className="Products-overlay"></div> : null}
                    <h2 style={{ paddingTop: '100px' }}>Products</h2>
                    <div className="Products">
                        {products ? products.map((product) => {
                            return <Product product={product} key={product.sku} />
                        }) : <p className="Products-loading">Loading...</p>}
                    </div>
                </div>
            )
            }
        </ShopContext.Consumer >
    )
}
