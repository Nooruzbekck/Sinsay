import React from 'react';
import styled from 'styled-components';

 export const Button = ({ onClick, children, type, placeholder, ...props}) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      placeholder={placeholder}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
 const StyledButton = styled.button`
  width: 130px;
  height: 49px;
  background-color: #000000;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;

 `