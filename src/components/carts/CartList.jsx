import React from "react";
import { CartItem } from "./CartItem";
import styled from "styled-components";
import { CARDS } from "../../utils/constants/cart";

export const CartList = () => {
  return (
    <StyledLink>
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
