import React from "react";
import {Link} from 'gatsby';
import styled from "styled-components";
import {GiHamburgerMenu} from 'react-icons/gi';
import {menuInformation} from '../data/MenuObj'
import {Button} from "./Button";

const Header = () => {
    return (
        <Nav>
            <NavLink fontSize='40px' to='/'>Escape.</NavLink>
            <Bars/>
            <NavMenu>
                {
                    menuInformation.map((menuItem, index) => (
                        <NavLink key={index} to={menuItem.link}>
                            {menuItem.name}
                        </NavLink>
                    ))
                }
            </NavMenu>
            <NavBtn>
                <Button primary={true} round={true} to='/trips'>Get template</Button>
            </NavBtn>
        </Nav>

    )
}

export default Header

const Nav = styled.header`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  z-index: 5;
  position: relative;
`

const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  cursor: pointer;
  font-size:${({fontSize}) => (fontSize ?  fontSize :'20px')};
  
  :not(:last-child){
    margin-right: 40px;
  }
`

const Bars = styled(GiHamburgerMenu)`
  display: none;
  color: white;
  font-size: 30px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

const NavMenu = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    display: none;
  }
`
