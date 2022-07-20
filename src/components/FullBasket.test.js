import { render, screen, fireEvent } from '@testing-library/react';
import FullBasket from './FullBasket';
// Context
import { ShopContext } from '../components/GlobalState';

const emptyContext = {
    products: [],
    basket: [],
    addToBasket: (product) => { },
    removeFromBasket: (product) => { },
    showBasket: true,
    basketClick: () => { },
}

test('renders full basket with no items message when empty basket shown', () => {
    render(<ShopContext.Provider value={emptyContext}><FullBasket /></ShopContext.Provider>);
    expect(screen.queryByTestId('flyout')).toBeInTheDocument();
    expect(screen.getByText(/your basket is empty/i)).toBeInTheDocument();
});

test('renders product fields and delete button when one of an item in non-empty basket shown', () => {
    render(<ShopContext.Provider value={{
        basket: [
            {
                "productId": "5493179",
                "sku": "549/3179",
                "title": "Kettle",
                "price": 24.99,
                "image": "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130",
                "amount": 1
            }],
        showBasket: true,
    }}><FullBasket /></ShopContext.Provider>);
    expect(screen.queryByTestId('flyout')).toBeInTheDocument();
    expect(screen.queryByText(/your basket is empty/i)).not.toBeInTheDocument();
    expect(screen.getByText('Kettle')).toBeInTheDocument();
    expect(screen.getByText('x 1')).toBeInTheDocument();
    expect(screen.getByText('£ 24.99')).toBeInTheDocument();
    expect(screen.getByTestId('times-circle')).toBeInTheDocument();
    expect(screen.queryByTestId('minus-circle')).not.toBeInTheDocument();
});

test('renders minus button when more than one of a single item is in basket', () => {
    render(<ShopContext.Provider value={{
        basket: [
            {
                "productId": "12345",
                "sku": "12345",
                "title": "Pot",
                "price": 3.22,
                "image": "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130",
                "amount": 2
            }],
        showBasket: true,
    }}><FullBasket /></ShopContext.Provider>);
    expect(screen.queryByTestId('flyout')).toBeInTheDocument();
    expect(screen.queryByText(/your basket is empty/i)).not.toBeInTheDocument();
    expect(screen.getByText('Pot')).toBeInTheDocument();
    expect(screen.getByText('x 2')).toBeInTheDocument();
    expect(screen.getByText('£ 6.44')).toBeInTheDocument();
    expect(screen.queryByTestId('times-circle')).not.toBeInTheDocument();
    expect(screen.getByTestId('minus-circle')).toBeInTheDocument();
});

test('clicking minus button calls removeFromBasket function', async () => {
    const removeFromBasket = jest.fn();
    render(<ShopContext.Provider value={{
        basket: [
            {
                "productId": "12345",
                "sku": "12345",
                "title": "Pot",
                "price": 3.22,
                "image": "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130",
                "amount": 2
            }],
        showBasket: true,
        removeFromBasket: removeFromBasket,
    }}><FullBasket /></ShopContext.Provider>);
    const minus = screen.queryByTestId('minus-circle');
    expect(removeFromBasket).not.toHaveBeenCalled();
    fireEvent.click(minus);
    expect(removeFromBasket).toHaveBeenCalledTimes(1);
});

test('clicking delete button calls removeFromBasket function', async () => {
    const removeFromBasket = jest.fn();
    render(<ShopContext.Provider value={{
        basket: [
            {
                "productId": "12345",
                "sku": "12345",
                "title": "Pot",
                "price": 3.22,
                "image": "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130",
                "amount": 1
            }],
        showBasket: true,
        removeFromBasket: removeFromBasket,
    }}><FullBasket /></ShopContext.Provider>);
    const times = screen.queryByTestId('times-circle');
    expect(removeFromBasket).not.toHaveBeenCalled();
    fireEvent.click(times);
    expect(removeFromBasket).toHaveBeenCalledTimes(1);
});