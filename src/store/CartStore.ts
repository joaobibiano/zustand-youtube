import { create } from "zustand";

// buscar de uma API
const initialItems = [
  {
    id: "p1",
    name: "Wireless Bluetooth Earbuds",
    price: 49.99,
  },
  {
    id: "p2",
    name: "Smartphone Holder and Stand",
    price: 12.99,
  },
  {
    id: "p3",
    name: "Stainless Steel Water Bottle",
    price: 19.95,
  },
  {
    id: "p4",
    name: "Classic Leather Wallet",
    price: 29.99,
  },
  {
    id: "p5",
    name: "Portable USB Power Bank",
    price: 34.95,
  },
];

type Item = {
  id: string;
  name: string;
  price: number;
};

type CartStore = {
  availableItems: Item[];
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
};

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    availableItems: initialItems,
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (id) =>
      set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
  };
});
