import { useContext } from "react";
import { AuthContext } from "./context/LoginContext";
import { PRODUCTS } from "../utils/constants/products";
import { ProductsList } from "./UI/ProductsList";
import { Login } from "./laus/Login";


export const LoginProducts = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>{isLoggedIn ? <ProductsList products={PRODUCTS} /> : <Login />}</div>
  );
};
