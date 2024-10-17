import styled from "styled-components";
import { Icons } from "../../assets";
import { AuthContext } from "../../context/LoginContext";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ProductContext";

const Header = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const { carts } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  const favoriteCount = products.filter((product) => product.favorite).length;

  return (  
    <StyleHeader>
      <BurgerDiv>
        <Icons.Burgermenu onClick={() => setIsLoggedIn("/")} />
      </BurgerDiv>
      <AnimatedHeading>
        {"SINSAY".split("").map((letter, index) => (
          <AnimatedLetter key={index} delay={index * 0.5}>
            {letter}
          </AnimatedLetter>
        ))}
      </AnimatedHeading>
      <ChildDiv>
        <Icons.Search />
        <div>
          <Icons.People onClick={() => setIsLoggedIn("about")} />
        </div>
        <WrapperBag>
          <Icons.Heart onClick={() => setIsLoggedIn("favorite")} />
          {favoriteCount > 0 && <StyledSpan>{favoriteCount}</StyledSpan>}
        </WrapperBag>

        <HeartWrapper>
          {carts.length > 0 && <StyledSpan>{carts.length}</StyledSpan>}
          <Icons.Bag onClick={() => setIsLoggedIn("cart")} />
        </HeartWrapper>
      </ChildDiv>
    </StyleHeader>
  );
};

export default Header;

const StyleHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 100px;
  border-bottom: 2px solid black;
  position: fixed;
  z-index: 10px;
  border-radius: 120px / 5px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
`;

const BurgerDiv = styled.div`
  padding-top: 30px;
`;

const ChildDiv = styled.div`
  display: flex;
  height: 30px;
  gap: 60px;
`;

const HeartWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
`;

const WrapperBag = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const AnimatedHeading = styled.h2`
  display: flex;
  font-family: Montserrat;
  font-size: 40px;
  font-weight: bold;
  color: black;
  margin: 0;
`;

const AnimatedLetter = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateX(100%);
  animation: slideIn 0.5s ease-out forwards;
  animation-delay: ${(props) => props.delay}s;

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
