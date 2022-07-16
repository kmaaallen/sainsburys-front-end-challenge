import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page header', () => {
  render(<App />);
  const pageHeader = screen.getByText(/sainsbury's/i);
  expect(pageHeader).toBeInTheDocument();
});

test('renders products container', () => {
  render(<App />);
  const productsHeader = screen.getByText(/products/i);
  expect(productsHeader).toBeInTheDocument();
});


