import { useCartStore } from "../store/CartStore";

export const Total = () => {
  const items = useCartStore((state) => state.cart);

  const sum = items.reduce((acc, item) => acc + item.price, 0);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div>
      <h1>Total {formatter.format(sum)}</h1>
    </div>
  );
};
