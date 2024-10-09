import React from 'react';
import styled from 'styled-components';

const Input = ({ value, onChange, placeholder, type = 'text', ...props }) => {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props} 
     
    ></StyledInput>
  );
};

export default Input;
const StyledInput = styled.input`
width: 542px;
height: 80px;
border: 1px solid #000000;
padding-left: 20px;
font-size: 30px;
`