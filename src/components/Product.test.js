import { render, screen } from '@testing-library/react';
import Product from './Product';

test('renders product fields', () => {
    const product = {
        "productId": "5493179",
        "sku": "549/3179",
        "title": "Russell Hobbs Pennine Illuminating S Steel Kettle 20444",
        "price": 24.99,
        "image": "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130"
    }

    render(<Product key="xxx" product={product} />);
    const productImage = screen.getByTestId("product-image");
    const productTitle = screen.getByText(/Russell Hobbs Pennine Illuminating S Steel Kettle 20444/i);
    const productSku = screen.getByText(/549\/3179/i);
    const productPrice = screen.getByText(/24.99/i);
    expect(productImage && productTitle && productSku && productPrice).toBeInTheDocument();
});

test('contains add to basket button', () => {
    const product = {
        "productId": "5493179",
        "sku": "549/3179",
        "title": "Russell Hobbs Pennine Illuminating S Steel Kettle 20444",
        "price": 24.99,
        "image": "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130"
    }

    render(<Product key="xxx" product={product} />);
    const addToBasketBtn = screen.getByRole('button', { name: 'Add to basket' });
    expect(addToBasketBtn).toBeInTheDocument();
})