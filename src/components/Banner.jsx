import React, { useState, useEffect } from "react";
import Restor1 from "../icons/Restor.png";
import Restor2 from "../assets/slaider.png";
import Restor3 from "../assets/slaider3.png";
import styled from "styled-components";

const Banner = () => {
  const banners = [Restor1, Restor2, Restor3];

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [banners.length]);

  return (
    <DivStyle>
      <BannerStyle src={banners[currentBannerIndex]} alt="Banner" />
      <TextStyle>View all products</TextStyle>
    </DivStyle>
  );
};

export default Banner;

const DivStyle = styled.div`
  width: 100%;
  height: 900px;
`;

const BannerStyle = styled.img`
  width: 100%;
  height: 845px;
  object-fit: cover;
  background-repeat: no-repeat;
  z-index: 1; 
  background-attachment: fixed;
  
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
  width: 30%;
`;
