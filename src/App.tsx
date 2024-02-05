
import ProductList from './products/ProductList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import productData from './products/ProductData';
import ProductDetails from './details/ProductDetails';
import './App.css';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/' element={<ProductList products={productData} />}/>
            <Route path='/products/:id' element={<ProductDetails products={productData} />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;