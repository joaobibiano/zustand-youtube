import { useCartStore } from "../store/CartStore";

export const Cart = () => {
  const [items, removeFromCart] = useCartStore((state) => [
    state.cart,
    state.removeFromCart,
  ]);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button
              onClick={() => {
                removeFromCart(item.id);
              }}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
