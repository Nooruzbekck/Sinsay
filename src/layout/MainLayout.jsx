import { useContext } from "react";
import { AuthContext } from "../context/LoginContext";
import { Login } from "../components/auth/Login";
import { MainPage } from "../pages/MainPage";
import Header from "../components/Header/Header";
import { Footer } from "../components/Footer";
import styled from "styled-components";
import { FavoritePage } from "../pages/FavoritePage";
import { About } from "../pages/About";

export const MainLayout = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <StyledCono>
        {isLoggedIn === "/" ? (
          <MainPage />
        ) : isLoggedIn === "cart" ? (
          <h1>cart</h1>
        ) : isLoggedIn === "favorite" ? (
          <FavoritePage />
        ) : isLoggedIn == "about" ? (
          <About />
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
