import { useState, useEffect } from 'react';
import Product from './Product';
import ProductFilter from './ProductFilter';
import { Link } from 'react-router-dom';

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [filters, setFilters] = useState({ postalCode: 'all', category: 'all', price: null });

  useEffect(() => {
    let filtered = [...products];

    if (filters.postalCode !== 'all') {
      filtered = filtered.filter((product) => {
        const isEven = parseInt(product.postalCode) % 2 === 0;
        return (isEven && filters.postalCode === 'even') || (!isEven && filters.postalCode === 'odd');
      });
    }

    if (filters.category !== 'all') {
      filtered = filtered.filter((product) => product.category === filters.category);
    }

    if (filters.price !== null) {
      filtered = filtered.filter((product) => product.price <= filters.price);
    }

    setFilteredProducts(filtered);
  }, [products, filters]);

  return (
    <div>
      <h2>Lista de productos</h2>
      <ProductFilter filters={filters} onFilterChange={setFilters} />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Precio: {product.price}€</p>
            <p>Descripción: {product.description}</p>
            <p>Código postal: {product.postalCode}</p>
            <Link to={`/products/${product.id}`}>
              <button>Ver detalles</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;