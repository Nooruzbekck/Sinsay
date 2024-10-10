import React from 'react'
import { Icons } from '../assets/index'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
      <ParentDiv>
       <img src={Icons.Burgermenu} alt="" />
       <h2>SINSAY</h2>
       <ChildDiv>
       <img src={Icons.Search} alt="Search" />
       <img src={Icons.People} alt="People" />
       <img src={Icons.Heart} alt="Heart" />
       <img src={Icons.Bag} alt="Korzina" />
       </ChildDiv>
      </ParentDiv>
      <hr />
    </div>
  )
}

export default Header
const ParentDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
const ChildDiv = styled.div`
width: 80px;
height: 30px;
display: flex;
margin: 15px ;
gap: 15px;
`;
