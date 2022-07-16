import React from 'react'

export default function Product(props) {
    return (
        <div className="Product" data-testid="product-card">
            <img src={props.product.image} alt="" className="Product-image" data-testid="product-image" />
            <p className="Product-info"><strong>{props.product.title}</strong> - {props.product.sku}</p>
            <p className="Product-price">£ {props.product.price}</p>
        </div>
    )
}
