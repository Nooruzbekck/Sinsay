import styled from "styled-components";
import { Icons } from "../../assets";
import { AuthContext } from "../../context/LoginContext";
import { useContext } from "react";
const Header = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  return (
    <StyleHeader>
      <BurgerDiv>
        <Icons.Burgermenu onClick={() => setIsLoggedIn("/")} />
      </BurgerDiv>
      <StyleText>SINSAY</StyleText>
      <ChildDiv>
        <Icons.Search onClick={() => setIsLoggedIn("about")} />
        <StylePeople>
          <Icons.People />
        </StylePeople>
        <Icons.Heart onClick={() => setIsLoggedIn("favorite")} />
        <Icons.Bag onClick={() => setIsLoggedIn("cart")} />
      </ChildDiv>
    </StyleHeader>
  );
};

export default Header;
const StyleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 100px;
  border-bottom: 2px solid black;
`;
const BurgerDiv = styled.div`
  padding-top: 20px;
`;
const StyleText = styled.h2`
  padding-top: 9px;
`;
const StylePeople = styled.div`
  padding-top: 4px;
`;
const ChildDiv = styled.div`
  display: flex;
  padding-top: 20px;
  height: 30px;
  gap: 60px;
`;
