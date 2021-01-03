import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'
import {FaBars} from 'react-ocons/fa'

const Header = () => {
  return (
    <Nav>
       <NavLink to="/">EXPLORE</NavLink>
       <Bars />


    </Nav>
  )
}

export default Header

const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: space-beteen;
padding:0.5rem calc((100vw - 1300px)/2);
z-index:100;
position: relative;
` 
const NavLink = styled(Link)`
color:black;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.1rem;
height: 100%;
cursor: pointer;
`
const Bars = styled(FaBars)`
display: none;
color: 'blue';
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