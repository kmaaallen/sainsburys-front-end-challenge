import { render, screen, fireEvent } from '@testing-library/react';
import Basket from './Basket';
// Context
import { ShopContext } from '../components/GlobalState';

const emptyContext = {
    products: [],
    basket: [],
    addToBasket: (product) => { },
    removeFromBasket: (product) => { },
    showBasket: false,
    basketClick: () => { },
}

test('renders basket', () => {
    render(<ShopContext.Provider value={emptyContext}><Basket /></ShopContext.Provider>);
    const btn = screen.queryByRole('button', { name: '0' });
    expect(btn).toBeInTheDocument();
});

test('renders correct number of basket items when basket not empty', () => {
    render(<ShopContext.Provider value={{
        products: [{
            "productId": "5493179",
            "sku": "549/3179",
            "title": "Kettle",
            "price": 24.99,
            "image": "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130"
        }], basket: [
            {
                "productId": "5493179",
                "sku": "549/3179",
                "title": "Kettle",
                "price": 24.99,
                "image": "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130",
                "amount": 1
            }],
    }}><Basket /></ShopContext.Provider>);
    const btn = screen.getByRole('button', { name: '1' });
    expect(btn).toBeInTheDocument();
});

test('calls basket click function when basket clicked', () => {
    const basketClick = jest.fn();
    render(<ShopContext.Provider value={{
        products: [{
            "productId": "5493179",
            "sku": "549/3179",
            "title": "Kettle",
            "price": 24.99,
            "image": "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130"
        }], basket: [
            {
                "productId": "5493179",
                "sku": "549/3179",
                "title": "Kettle",
                "price": 24.99,
                "image": "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130",
                "amount": 1
            }],
        basketClick: basketClick,
    }}><Basket /></ShopContext.Provider>);
    const btn = screen.getByRole('button', { name: '1' });
    expect(btn).toBeInTheDocument();
    expect(screen.queryByTestId('flyout')).toBeFalsy();
    fireEvent.click(btn);
    expect(basketClick).toBeCalledTimes(1);
});