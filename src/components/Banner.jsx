import React from "react";
import Restor from "../icons/Restor.png";
import styled from "styled-components";
const Banner = () => {
  return (
    <DivStyle>
      <BannerStyle src={Restor} alt="" />
      <TextStyle>View all products</TextStyle>
    </DivStyle>
  );
};

export default Banner;
const DivStyle = styled.div`
  margin: 10px;
`;
const BannerStyle = styled.img`
  width: 100%;
  height: 100vh;
`;
const TextStyle = styled.h2`
  font-family: Montserrat;
  font-size: 61px;
  font-weight: 500;
  line-height: 73.2px;
  align-items: center;
  color: #000000;
  position: relative;
  bottom: 280px;
  left: 100px;
  width: 45vh;
  height: 0%;
  display: block;
  overflow: hidden;
  width: 30%px;
`;
