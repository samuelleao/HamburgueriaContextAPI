import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CartProvider from './providers/CartContext'
import ProductsProvider from './providers/Products'
import SearchProvider from './providers/SearchProducts'

ReactDOM.render(
  <SearchProvider>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </SearchProvider>,
  document.getElementById('root')
);


