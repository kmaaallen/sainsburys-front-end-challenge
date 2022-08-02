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

test('renders product fields add/remove and delete button when at least one of an item in non-empty basket shown', () => {
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
    expect(screen.getByText('Kettle')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('£ 24.99')).toBeInTheDocument();
    expect(screen.getByTestId('fa-trash')).toBeInTheDocument();
    expect(screen.queryByText('+')).toBeInTheDocument();
    expect(screen.queryByText('-')).toBeInTheDocument();
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
    const minus = screen.queryByText('-');
    expect(removeFromBasket).not.toHaveBeenCalled();
    fireEvent.click(minus);
    expect(removeFromBasket).toHaveBeenCalledTimes(1);
});

test('clicking delete button calls removeFromBasket function with quantity', async () => {
    const removeFromBasket = jest.fn(Object, Number);
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
    const times = screen.queryByTestId('fa-trash');
    expect(removeFromBasket).not.toHaveBeenCalled();
    fireEvent.click(times);
    expect(removeFromBasket).toHaveBeenCalledTimes(1);
    expect(removeFromBasket).toHaveBeenCalledWith({
        "productId": "12345",
        "sku": "12345",
        "title": "Pot",
        "price": 3.22,
        "image": "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130",
        "amount": 1
    }, 1);
});