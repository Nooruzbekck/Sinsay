import React from "react";
import styled from "styled-components";

export const CartItem = ({ id, image, title, price }) => {
  return (
    <div>
        {/* <h1>Cart</h1> */}
        {/* <StyledDiv>
            <p>Product</p>
            <Styledlist>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </Styledlist>
        </StyledDiv> */}
    <StyledLi>
      <StyledImg src={image} alt="" />
      <StyledP>{title}</StyledP>
      <p>{id}</p>

      <p>{price}</p>
    </StyledLi>
    </div>
  );
};

const StyledP=styled.p`
    /* width:200px; */
`
const StyledLi=styled.li`
    display:flex;
    align-items:center;
    justify-content:space-between;
    border-bottom:2px solid;
    padding:63px 0 0 58px;
    gap:27;
`
const StyledImg=styled.img`

width:157px;
height:157px;
border:2px solid black;
background-color:#000000
    
`
const StyledDiv=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    


`
const Styledlist=styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

`


