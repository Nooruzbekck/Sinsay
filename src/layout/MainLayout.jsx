import { useContext } from "react";
import { AuthContext } from "../components/context/LoginContext";
import { PRODUCTS } from "../utils/constants/products";
import { Login } from "../components/auth/Login";
import { MainPage } from "../pages/MainPage";
import Header from "../components/Header/Header";
import { Footer } from "../components/Footer";
import styled from "styled-components";

export const MainLayout = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <StyledCono>
        {isLoggedIn === "/" ? (
          <MainPage />
        ) : isLoggedIn === "cart" ? (
          <h1>asdfasdf</h1>
        ) : isLoggedIn === "favorite" ? (
          <h1>Favorite</h1>
        ) : isLoggedIn == "about" ? (
          <h1>About</h1>
        ) : (
          <Login />
        )}
        <Footer />
      </StyledCono>
    </div>
  );
};
const StyledCono = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
