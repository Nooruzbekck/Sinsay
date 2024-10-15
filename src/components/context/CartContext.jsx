import { createContext, useState } from "react";
import { PRODUCTS } from "../utils/constants/products";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

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
  console.log(carts);

  return (
    <CartContext.Provider value={{ carts, AddToCart }}>
      {children}
    </CartContext.Provider>
  );
};
