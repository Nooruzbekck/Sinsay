import React from "react";
import styled from "styled-components";
import { ProductsItem } from "./ProductsItem";

export const ProductsList = ({ products=[]}) => {
  return (
    <StyledContainer>

      {products.map((card) => (
        <ProductsItem key={card.id} {...card} />
      ))}
    </StyledContainer>
  );
};
const StyledContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 117px 80px;
`;
