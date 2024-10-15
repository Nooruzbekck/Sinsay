import React from "react";
import { CartItem } from "./CartItem";
import styled from "styled-components";
import { CARDS } from "../../utils/constants/cart";

export const CartList = () => {
  return (
    <StyledLink>
      <StyledUl>
        <StyledH1>Cart</StyledH1>
      <StyledConst>
      <StyledProducts>
          <p>Product</p>
        </StyledProducts>
        <StyledDiv>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </StyledDiv>
      </StyledConst>
      </StyledUl>
      {CARDS?.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </StyledLink>
  );
};

const StyledLink = styled.ul`
  /* width: 1220px;
  height: 884px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledDiv = styled.div`
  display: flex;
gap: 90px;
margin-top: 40px;
`;
const StyledUl = styled.div`
  width: 1000px;
  border-bottom: 1px solid black;

`;
const StyledConst = styled.div`
display: flex;
justify-content: space-around;
`
const StyledH1=styled.h1`
   font-size: 61px;
    font-weight: 500;
    text-align: center;

`

const StyledProducts = styled.div`
margin-top: 40px;
`