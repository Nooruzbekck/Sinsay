import React from 'react'
import { Icons } from '../assets/index'
import styled from 'styled-components'

const Header = () => {
  return (
      <StyleHeader>
       <img src={Icons.Burgermenu} alt="" />
       <h2>SINSAY</h2>
       <ChildDiv>
       <img src={Icons.Search} alt="Search" />
       <img src={Icons.People} alt="People" />
       <img src={Icons.Heart} alt="Heart" />
       <img src={Icons.Bag} alt="Korzina" />
       </ChildDiv>
      </StyleHeader>
  )
}

export default Header
const StyleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  padding-left: 40px ;
  padding-right: 100px;
`;
const ChildDiv = styled.div`
display: flex;
padding-top: 13px;
width: 80px;
height: 30px;
gap: 15px;
`;
