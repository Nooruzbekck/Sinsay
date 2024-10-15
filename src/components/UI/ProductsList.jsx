<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import { ProductsItem } from "./ProductsItem";

export const ProductsList = ({ products=[]}) => {
  return (
    <StyledContainer>

=======
import styled from "styled-components";
import { ProductsItem } from "./ProductsItem";

export const ProductsList = ({ products = [] }) => {
  return (
    <StyledContainer>
>>>>>>> edc32261bbe6004952bdec55af5304a598d99204
      {products.map((card) => (
        <ProductsItem key={card.id} {...card} favorite={"favorite"} />
      ))}
    </StyledContainer>
  );
};
const StyledContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
<<<<<<< HEAD
  gap: 117px 80px;
=======
  gap: 120px 20px;
  padding: 100px;
>>>>>>> edc32261bbe6004952bdec55af5304a598d99204
`;
