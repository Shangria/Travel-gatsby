import React, {useEffect, useState} from 'react';
import {Link} from 'gatsby';
import styled from "styled-components";
import {GiHamburgerMenu} from 'react-icons/gi';
import {menuInformation} from '../data/MenuObj'
import {Button} from "./Button";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 1;
            if (isScrolled !== scrolled) {
                setScrolled(!scrolled);
            }
        };

        handleScroll();

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);


    return (
        <HeaderNav data-active={scrolled}>
            <HeaderNavLink fontSize='40px' to='/'>Escape.</HeaderNavLink>
            <HeaderNavBars/>
            <HeaderNavMenu>
                {
                    menuInformation.map((menuItem, index) => (
                        <HeaderNavLink key={index} to={menuItem.link}>
                            {menuItem.name}
                        </HeaderNavLink>
                    ))
                }
            </HeaderNavMenu>
            <HeaderNavBtn>
                <Button primary={scrolled ? 1 : 0} round="true" to='/trips'>Get template</Button>
            </HeaderNavBtn>
        </HeaderNav>
    )
}

export default Header

const HeaderNav = styled.header`
  background: transparent;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  z-index: 5;
  position: fixed;
  width: 100%;
  @media (min-width: ${({theme}) => theme.media.wideScreenXl}) {
    justify-content: space-around;
  }


  &[data-active='true'] {
    background: rgb(152 29 29 / 41%);
    box-shadow: 0 2px 8px rgba(152, 168, 188, .2);
  }
`

const HeaderNavLink = styled(Link)`
  color: ${({theme}) => theme.colors.light};;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-size: ${({fontSize}) => (fontSize ? fontSize : '20px')};

  :not(:last-child) {
    margin-right: 40px;
  }
`

const HeaderNavBars = styled(GiHamburgerMenu)`
  display: block;
  color: ${({theme}) => theme.colors.light};
  font-size: 30px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  cursor: pointer;

  @media (min-width: ${({theme}) => theme.media.desktopMin}) {
    display: none;
  }
`

const HeaderNavMenu = styled.nav`
  display: none;
  align-items: center;

  @media (min-width: ${({theme}) => theme.media.desktopMin}) {
    display: flex;
  }
`

const HeaderNavBtn = styled.div`
  display: none;
  align-items: center;

  @media (min-width: ${({theme}) => theme.media.desktopMin}) {
    display: flex;
  }
`
