import styled from "styled-components";
import { ProductsList } from "../components/UI/ProductsList";
import { PRODUCTS } from "../utils/constants/products";

export const FavoritePage = () => {
  return (
    <div>
      <Title>Wish list</Title>
      <ProductsList products={PRODUCTS} />
    </div>
  );
};

const Title = styled.h1`
  text-align: center;
  font-size: 61px;
  font-weight: 400;
  color: #000;
`;
