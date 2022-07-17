import { render, screen, fireEvent } from '@testing-library/react';
import AddToBasket from './AddToBasket';
// Context
import { ShopContext } from '../components/GlobalState';

const emptyContext = {
    products: [],
    basket: [],
    addToBasket: (product) => { },
    removeFromBasket: (product) => { }
}

test('renders button', () => {
    render(<ShopContext.Provider value={emptyContext}><AddToBasket /></ShopContext.Provider>);
    const btn = screen.getByRole('button', { name: 'Add to basket' });
    expect(btn).toBeInTheDocument();
});

test('calls add to basket function on click', () => {
    const addToBasket = jest.fn();
    const removeFromBasket = jest.fn();
    render(<ShopContext.Provider value={{ products: [], basket: [], addToBasket: addToBasket, removeFromBasket: removeFromBasket }}><AddToBasket /></ShopContext.Provider>);
    const btn = screen.getByRole('button', { name: 'Add to basket' });
    fireEvent.click(btn);
    expect(addToBasket).toHaveBeenCalledTimes(1);
});

test('calls add to basket function on click', () => {
    const addToBasket = jest.fn();
    const removeFromBasket = jest.fn();
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
            }], addToBasket: addToBasket, removeFromBasket: removeFromBasket
    }}> <AddToBasket product={{
        "productId": "5493179",
        "sku": "549/3179",
        "title": "Kettle",
        "price": 24.99,
        "image": "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130"
    }} /></ShopContext.Provider >);
    const addBtn = screen.getByRole('button', { name: '+' });
    const removeBtn = screen.getByRole('button', { name: '-' });
    expect(addBtn && removeBtn).toBeInTheDocument();
    fireEvent.click(addBtn);
    expect(addToBasket).toHaveBeenCalledTimes(1);
    fireEvent.click(removeBtn);
    expect(removeFromBasket).toHaveBeenCalledTimes(1);
});