import { useState } from 'react';
import ProductList from './products/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import productData from './products/ProductData';
import ProductDetails from './details/ProductDetails';
import Product from './products/Product';
import ShoppingCart from './cart/ShoppingCart';
import './App.css';

function App() {

  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(product => product.id !== productId));
  };


  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<ProductList  cart={cart} products={productData} addToCart={addToCart} removeFromCart={removeFromCart}/>}/>
            <Route path='/products/:id' element={<ProductDetails products={productData} />} />
            <Route path='/cart' element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;