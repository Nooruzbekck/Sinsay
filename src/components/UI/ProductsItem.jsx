import React from "react";
import styled from "styled-components";

export const ProductsItem = ({ image, title, price, id, onAddToCart }) => {
  return (
    <StyledCard>
      <Styledimage src={image} alt={title} />
      <p>{title}</p>
      <StyledSvgDiv>
        <b>${price}</b>
        <img src="" />
      </StyledSvgDiv>

      <button onClick={() => onAddToCart(id)}>Add to cart</button>
    </StyledCard>
  );
};

const Styledimage = styled.img`
  width: 305px;
  height: 305px;
  border: 2px solid;
`;
const StyledCard = styled.li`
  width: 304px;
  height: 460px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  p {
    color: #000000;
    font-size: 15.5px;
    line-height: 18.6px;
    font-weight: 400;
    text-align: center;
  }
  button {
    width: 304px;
    height: 50px;
    background-color: #000000;
    font-size: 17px;
    color: #ffffff;
    border: none;
  }
`;
const StyledSvgDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 28px;
  b {
    color: #000000;
    font-size: 15.5px;
    line-height: 18.6px;
    font-weight: 600;
  }
`;
