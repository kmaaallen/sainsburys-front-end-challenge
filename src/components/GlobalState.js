import React, { useEffect, useState, createContext } from 'react';

export const ShopContext = createContext({
    products: [],
    basket: [],
    addToBasket: (product) => { },
    removeFromBasket: (product) => { },
    showBasket: false,
    basketClick: (basket) => { },
});


export function GlobalState(props) {
    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);
    const [showBasket, setShowBasket] = useState(false);

    // Fetch products
    async function fetchProducts() {
        const response = await fetch("https://jsainsburyplc.github.io/front-end-test/products.json");
        setProducts(await response.json());
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    // Show basket
    const basketClick = () => {
        if (basket.length > 0) setShowBasket(!showBasket);
    }

    // Add to basket
    const addToBasket = (product) => {
        const newBasket = [...basket];
        const addedItemIndex = newBasket.findIndex((basketItem) => {
            return basketItem.sku === product.sku;
        });

        if (addedItemIndex < 0) {
            // Not already in basket
            newBasket.push({ ...product, amount: 1 });
        } else {
            const addedItem = { ...newBasket[addedItemIndex] };
            addedItem.amount++;
            newBasket[addedItemIndex] = addedItem;
        }
        setBasket(newBasket);
    }


    // Remove from basket
    const removeFromBasket = (product, quantity) => {
        const newBasket = [...basket];
        const removedItemIndex = newBasket.findIndex((basketItem) => {
            return basketItem.sku === product.sku;
        });

        if (removedItemIndex < 0) {
            // Not in basket - do nothing - should never get here
            return;
        } else {
            const removedItem = { ...newBasket[removedItemIndex] };
            if (removedItem.amount === 1 || (quantity && quantity === removedItem.amount)) {
                // Only one item so remove whole product or delete line
                newBasket.splice(removedItemIndex, 1);
            } else {
                removedItem.amount--;
                newBasket[removedItemIndex] = removedItem;
            }
        }
        setBasket(newBasket);
    }


    return (
        <ShopContext.Provider
            value={
                {
                    products: products,
                    basket: basket,
                    addToBasket: addToBasket,
                    removeFromBasket: removeFromBasket,
                    showBasket: showBasket,
                    basketClick: basketClick,
                }
            }>
            {props.children}
        </ShopContext.Provider>
    )
}


