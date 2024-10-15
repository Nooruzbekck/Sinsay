import Banner from "../components/Banner";
import { ProductsList } from "../components/UI/ProductsList";
import { PRODUCTS } from "../utils/constants/products";
import styled from "styled-components";

export const MainPage = () => {
  return (
    <div>
      <Banner />
      <StyledDiving>
      <h1>Face care</h1>
        <ProductsList products={PRODUCTS} />
      </StyledDiving>
    </div>
  );
};
const StyledDiving = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
h1{
    padding: 30px;
    font-size: 47px;
    color: #000000;
    font-weight: 500;
}
`