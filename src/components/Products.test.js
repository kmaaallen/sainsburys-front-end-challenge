import { render, screen } from '@testing-library/react';
import Products from './Products';
// Context
import { ShopContext } from '../components/GlobalState';

const emptyContext = {
    products: [],
    basket: [],
    addToBasket: (product) => { },
    removeFromBasket: (product) => { }
}

const productContext = {
    products: [{
        "productId": "5493179",
        "sku": "549/3179",
        "title": "Russell Hobbs Pennine Illuminating S Steel Kettle 20444",
        "price": 24.99,
        "image": "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130"
    },
    {
        "productId": "4251824",
        "sku": "425/1824",
        "title": "Challenge White Desk Fan - 12 Inch",
        "price": 14.99,
        "image": "https://media.4rgos.it/s/Argos/4251824_R_SET?w=110&h=130"
    }],
    basket: [],
    addToBasket: (product) => { },
    removeFromBasket: (product) => { }
}

test('renders page header', () => {
    render(<ShopContext.Provider value={emptyContext}><Products /></ShopContext.Provider>);
    const pageHeader = screen.getByText(/products/i);
    expect(pageHeader).toBeInTheDocument();
});

test('renders loading while no product data', () => {
    render(<ShopContext.Provider value={emptyContext}><Products /></ShopContext.Provider>);
    const loader = screen.findByText(/loading.../i);
    expect(loader).toBeTruthy();
});


test('renders product data', async () => {
    render(<ShopContext.Provider value={productContext}><Products /></ShopContext.Provider>);
    const allProducts = await screen.findAllByTestId("product-card");
    expect(allProducts.length).toEqual(2);
});

