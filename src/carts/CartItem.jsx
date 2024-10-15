import React from "react";
import styled from "styled-components";
import { Icons } from "../assets";

export const CartItem = ({ id, image, title, price }) => {
  return (
    <>
    <StyledDiv>
        <StyledLi>
          <StyledImg src={image} alt="" />
          <StyledP>{title}</StyledP>
          <StyledPrice>${price}</StyledPrice>
          <StyledButton> - 1 +</StyledButton>
          <StyledPrice>${price}</StyledPrice>
        </StyledLi>
        <StyledIcons>
          <Icons.Korzina />
        </StyledIcons>
      </StyledDiv>
   
    </>
  );
};
const StyledDivs = styled.div`
`
const StyledP = styled.p`
  margin-left: 80px;
`;
const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 0 30px;
  gap: 27;
`;
const StyledImg = styled.img`
  width: 157px;
  height: 157px;
  margin-left: 10px;
  border: 2px solid black;
  background-color: #000000;
  margin-bottom: 30px;
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid;
`;
const StyledPrice = styled.p`
  margin-left: 30px;
`;
const StyledButton = styled.button`
  width: 70px;
  height: 25px;
  margin-left: 40px;
  border: none;
`;
const StyledIcons = styled.div`
  margin-left: 60px;
  margin-top: 30px;
`;
