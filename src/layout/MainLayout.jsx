import { useContext } from "react";
import { AuthContext } from "../components/context/LoginContext";
import { PRODUCTS } from "../utils/constants/products";
import { ProductsList } from "../components/UI/ProductsList";
import { Login } from "../components/auth/Login";

export const MainLayout = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>{isLoggedIn ? <ProductsList products={PRODUCTS} /> : <Login />}</div>
  );
};
