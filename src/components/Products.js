import React, { useState, useEffect } from 'react'
// Components
import Product from './Product';

export default function Products() {
    const [products, setProducts] = useState();
    // Fetch products
    async function fetchProducts() {
        const response = await fetch("https://jsainsburyplc.github.io/front-end-test/products.json");
        setProducts(await response.json());
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div>
            <h2>Products</h2>
            <div className="Products">
                {products ? products.map((product) => {
                    return <Product product={product} key={product.sku} />
                }) : <p className="Products-loading">Loading...</p>}
            </div>
        </div>
    )
}
