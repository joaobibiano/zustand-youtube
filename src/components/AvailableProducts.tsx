import { useCartStore } from "../store/CartStore";

export const AvailableProducts = () => {
  const [items, addToCart] = useCartStore((state) => [
    state.availableItems,
    state.addToCart,
  ]);

  return (
    <div>
      <h1>Choose a product</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button
              onClick={() => {
                addToCart(item);
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
