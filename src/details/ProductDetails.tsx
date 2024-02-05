
import { useParams } from 'react-router-dom';
import Product from '../products/Product';

interface ProductDetailsProps {
  products: Product[];
}

function ProductDetails({ products }: ProductDetailsProps) {
  const { id } = useParams();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio: {product.price}€</p>
      <p>Descripción: {product.description}</p>
      <p>Código postal: {product.postalCode}</p>
      <img src={product.image} alt={product.name} style={ {width: "300px", height: "auto"}}/>
    </div>
  );
}

export default ProductDetails;