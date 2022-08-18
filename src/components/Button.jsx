import styled from "styled-components";
import {Link} from 'gatsby';

import { baseTheme } from './styles/theme'

export const Button = styled(Link)`
  background: ${({primary}) => (primary ? baseTheme.colors.bg : baseTheme.colors.secondary)};
  padding: ${({big}) => (big ? '15px 40px' : '10px 30px')};
  color: ${baseTheme.colors.five};
  font-size:${({big}) => (big ? 'calc(0.7rem + 1vw)' : '18px')}; 
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: .2s !important;
  border-radius: ${({round}) => (round ? '50px' : 'none')}; 
  
  :hover{
    background: ${({primary}) => (primary ?  baseTheme.colors.secondary : baseTheme.colors.bg )};
    transform: translateY(-2px);
    color:  ${baseTheme.colors.light};
  }
`
