import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import { menuData } from '../data/MenuData'

const Header = () => {
  return (
    <Nav>
       <NavLink to="/">EXPLORE</NavLink>
       <Bars />
       <NavMenu>
         {menuData.map((item, index)=> (
           <NavLink to= {item.link} key={index}>
          {item.title}
          </NavLink>
         ))}
       </NavMenu>


    </Nav>
  )
}

export default Header

const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1300px)/2);
z-index: 100;
position: relative;
` 
const NavLink = styled(Link)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.4rem;
height: 100%;
cursor: pointer;
`
const Bars = styled(FaBars)`
display: none;
color: #faf;
@media screen and (max-width: 768px) {
  display:block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
}
`

const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -50px;
@media screen and (max-width:768px) {
  display: none;
}
`
