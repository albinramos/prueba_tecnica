
interface ShoppingCartProps {
  cart: any[];
  removeFromCart: (productId: number) => void;
}

function ShoppingCart({ cart, removeFromCart }: ShoppingCartProps) {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            <h3>{product.name}</h3>
            <p>Precio: {product.price}€</p>
            <button onClick={() => removeFromCart(product.id)}>-</button>
          </li>
        ))}
      </ul>
      <p>Total: {total}€</p>
    </div>
  );
}

export default ShoppingCart;