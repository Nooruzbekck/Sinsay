import styled from "styled-components";
import { ProductsItem } from "./ProductsItem";
import { useState } from "react";

export const ProductsList = ({ products = []}) => {

  return (
    <StyledContainer>
      {products.map((card) => (
        <ProductsItem key={card.id} {...card}  />
      ))}
    </StyledContainer>
  );
};
const StyledContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 120px 20px;
  padding: 100px;
`;
