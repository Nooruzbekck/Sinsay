import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevcount) => prevcount + 1);
  };

  const decrement = () => {
    setCount((prevcount) => (prevcount > 1 ? prevcount - 1 : 1));
  };

  const AddToCart = (newProduct) => {
    console.log(newProduct);
    const isDataPreset = carts.find((v) => v.id === newProduct.id);
    if (!isDataPreset) {
      setCarts((product) => [...product, { ...newProduct, quantity: 1 }]);
    } else {
      const currentMap = carts.map((product) =>
        product.id === newProduct.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCarts(currentMap);
    }
  };

  const removeFromCart = (id) => {
    const updatedCarts = carts.filter((item) => item.id !== id);
    setCarts(updatedCarts);
  };

  return (
    <CartContext.Provider
      value={{ carts, AddToCart, removeFromCart, count, increment, decrement }}
    >
      {children}
    </CartContext.Provider>
  );
};
