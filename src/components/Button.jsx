import styled from "styled-components";
import {Link} from 'gatsby';

export const Button = styled(Link)`
  background: ${({primary}) => (primary ? '#92b2d3' : '#b3c9df')};
  padding: ${({big}) => (big ? '15px 40px' : '10px 30px')};
  color: #e5e0fa;
  font-size:${({big}) => (big ? '25px' : '18px')}; 
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: .2s !important;
  border-radius: ${({round}) => (round ? '50px' : 'none')}; 
  
  :hover{
    background: ${({primary}) => (primary ?  '#b3c9df':'#92b2d3')};
    transform: translateY(-2px);
    color: white;
  }
`
