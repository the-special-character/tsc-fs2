import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { CartProvider } from './context/cartContext';
import { ProductsProvider } from './context/productsContext';
import './style.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductsProvider>,
);
