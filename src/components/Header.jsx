import React, {useEffect, useState} from 'react';
import {Link} from 'gatsby';
import styled from "styled-components";
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineClose} from 'react-icons/md';
import {menuInformation} from '../data/MenuObj'
import {Button} from "./Button";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

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


    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = openMenu ? 'hidden' : 'auto';
    }, [openMenu])

    const menuToggle = () => {
        setOpenMenu(openMenu => !openMenu);
    }

    return (
        <HeaderNav data-active={scrolled}>
            <HeaderNavLink fontSize='40px' to='/'>Escape.</HeaderNavLink>
            {openMenu
                ?
                <HeaderNavBarsClose onClick={menuToggle}/>
                :
                <HeaderNavBars onClick={menuToggle}/>
            }
            <HeaderNavMenu open={openMenu}>
                {
                    menuInformation.map((menuItem, index) => (
                        <HeaderNavLink key={index} to={menuItem.link}>
                            {menuItem.name}
                        </HeaderNavLink>
                    ))
                }
            </HeaderNavMenu>
            <HeaderNavBtn>
                <Button primary={scrolled ? 1 : 0} round="true" to='/about-trips'>Get more information</Button>
            </HeaderNavBtn>
        </HeaderNav>
    )
}

export default Header

const HeaderNav = styled.header`
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
  font-size: ${({fontSize}) => (fontSize ? fontSize : '40px')};

  @media (max-width: ${({theme}) => theme.media.desktopMin}) {
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }


  @media (min-width: ${({theme}) => theme.media.desktopMin}) {
    font-size: ${({fontSize}) => (fontSize ? fontSize : '20px')};

    :not(:last-child) {
      margin-right: 40px;
    }
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
  z-index: 5;

  @media (min-width: ${({theme}) => theme.media.desktopMin}) {
    display: none;
  }
`

const HeaderNavBarsClose = styled(MdOutlineClose)`
  display: block;
  color: ${({theme}) => theme.colors.light};
  font-size: 30px;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  cursor: pointer;
  z-index: 5;
`

const HeaderNavMenu = styled.nav`
  align-items: center;

  @media (max-width: ${({theme}) => theme.media.desktopMin}) {
    position: fixed;
    background: ${({theme}) => theme.colors.bg2};
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform .3s linear;
    transform: ${({open}) => (open ? "translateX(0)" : "translateX(-100%)")};
  }

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
