import styled from "styled-components";

export const ProductsList = ({ products }) => {
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
  gap: 117px 20px;
  padding: 100px;
`;
