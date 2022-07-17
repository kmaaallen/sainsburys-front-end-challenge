import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { GlobalState } from './GlobalState';
// Components
import App from '../App';

test('it renders children', () => {
    render(<GlobalState><div>Test</div></GlobalState>);
    const div = screen.getByText(/test/i);
    expect(div).toBeInTheDocument();
});

test('it allows users to add and remove a product to the basket', async () => {
    const productSample = [{
        "productId": "5493179",
        "sku": "549/3179",
        "title": "Kettle",
        "price": 24.99,
        "image": "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130"
    },
    {
        "productId": "4251824",
        "sku": "425/1824",
        "title": "Fan",
        "price": 14.99,
        "image": "https://media.4rgos.it/s/Argos/4251824_R_SET?w=110&h=130"
    }];

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(productSample)
        })
    );

    await act(async () => {
        render(<GlobalState><App /></GlobalState>);
    })

    const product1 = screen.getByText('Kettle');
    const product2 = screen.getByText('Fan');
    expect(product1 && product2).toBeInTheDocument();
    const btns = screen.getAllByRole('button', { name: 'Add to basket' });
    expect(btns).toHaveLength(2);
    const basketCount = screen.getByTestId('basket-count');
    expect(basketCount).toBeInTheDocument();
    expect(basketCount.textContent).toBe('0');
    // Add
    fireEvent.click(btns[0]);
    expect(basketCount.textContent).toBe('1');
    // Now one is in the basket
    const addBtn = screen.getByRole('button', { name: '+' });
    const removeBtn = screen.getByRole('button', { name: '-' });
    expect(addBtn && removeBtn).toBeInTheDocument();
    // Remove
    fireEvent.click(removeBtn);
    expect(basketCount.textContent).toBe('0');
});