import { createContext, useState } from "react";
import { PRODUCTS } from "../utils/constants/products";

export const FoveritContext = createContext({});

export const FovoritProvider = ({ children }) => {
  const [favorit, setFavirit] = useState([]);

  const AddToFaverit = (newProduct) => {
    const isDataPreset = favorit.find((v) => v.id === newProduct.id);
    if (!isDataPreset) {
      setFavirit((product) => [
        ...product,
        { ...newProduct, isFaverite: true },
      ]);
    } else {
      const currentfilter = favorit.filter(
        (product) => product.id !== newProduct.id
      );
      setFavirit(currentfilter);
    }
  };
  console.log(favorit);

  return (
    <FoveritContext.Provider value={{ favorit, AddToFaverit }}>
      {children}
    </FoveritContext.Provider>
  );
};
