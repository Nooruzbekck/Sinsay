import React from "react";
import styled from "styled-components";
import { Input } from "./UI/Input";
import { Icons } from "../assets/index";
import { Button } from "@mui/material";

export const Footer = () => {
  return (
    <StyledDiv>
      <StyledContact>
        <StyledA href=""> Contact Us</StyledA>
        <StyledN href="">+7784568930283</StyledN>
        <StyledS href="">Sinseybeaut@gmail.com</StyledS>
        <StyledM href="">Monday-Friday 10:00 am to 17:00 pm</StyledM>

        <StyledDIV>
          <Icons.Twitter />
          <Icons.Facebook />
          <Icons.Instagram />
        </StyledDIV>
        <StyledOffical href="">
          © 2023 SINSEY Official. Powered by Shopify
        </StyledOffical>
      </StyledContact>

      <StyledComent>
        <StyledB href="">Shop</StyledB>
        <StyledO href="">About</StyledO>
        <StyledC href="">Product</StyledC>
        <StyledX href="">Reviews</StyledX>
        <StyledL href="">Contact</StyledL>
      </StyledComent>
      <StyledNewsletter>
        <StyledZ href="">Newsletter</StyledZ>
        <StyledComents>
          <StyledNav href="">
            Sign up for exclusive offers ,original stories,events and more
          </StyledNav>

          <StyledInput placeholder="Enter email" />
          <StyledButton>Subscribe</StyledButton>
        </StyledComents>
      </StyledNewsletter>
    </StyledDiv>
  );
};

export default Footer;

const StyledDiv = styled.div`
  width: 1, 280px;
  height: 360;
  padding: 47px 92px 48px 92px;
  background-color: #cfc9cb;
  display: flex;
  /* align-items:center; */
  justify-content: space-around;
`;
const StyledOffical = styled.a`
  font-weight: 400px;
  font-size: 14px;
  line-height: 19.6px;
  color: #676869;
  padding-top: 30px;
`;
const StyledComents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const StyledContact = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const StyledDIV = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledInput = styled.input`
  width: 310px;
  height: 48.19px;
  max-width: 310px;
  background-color: #ffffff;
  padding-left: 16px;
  font-weight: 400px;
  font-size: 16px;
  line-height: 19px;
  color: #171717;
  border-radius: 3px;
  border: none;
`;

const StyledButton = styled.button`
  width: 130px;
  height: 49px;
  border: 1px;
  background-color: #000000;
  color: white;
  cursor: pointer;
`;
const StyledNewsletter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledA = styled.a`
  font-weight: 400;
  font-size: 21px;
  line-height: 25.2px;
  align-items: center;
  color: #000000;
`;
const StyledComent = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const StyledB = styled.a`
  font-weight: 400;
  font-size: 21px;
  line-height: 25.2px;
  align-items: center;
  color: #000000;
`;
const StyledZ = styled.a`
  font-weight: 400;
  font-size: 21px;
  line-height: 25.2px;
  align-items: center;
  color: #000000;
`;
const StyledN = styled.a`
  width: 148px;
  height: 19;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  align-items: center;
  color: #000000;
`;
const StyledS = styled.a`
  width: 148px;
  height: 19;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  align-items: center;
  color: #000000;
`;
const StyledM = styled.a`
  width: 166px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  align-items: center;
  color: #000000;
`;

const StyledO = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  align-items: center;
  color: #000000;
`;
const StyledC = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  align-items: center;
  color: #000000;
`;
const StyledX = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  align-items: center;
  color: #000000;
`;
const StyledL = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  align-items: center;
  color: #000000;
`;
const StyledNav = styled.a`
  width: 280px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  align-items: center;
  color: #676869;
`;
