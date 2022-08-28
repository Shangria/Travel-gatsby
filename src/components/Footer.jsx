import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterBox>
                <FooterText>
                    © 2022 Travel-gatsby, Inc.
                </FooterText>
            </FooterBox>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer=styled.div`
  color: ${({theme}) => theme.colors.light};
  background-color: ${({theme}) => theme.colors.bg2};
`

const FooterBox=styled.div`
  padding: 20px 0;
  max-width: 1170px;
  margin: 0 auto;
  text-align: center;
`


const FooterText=styled.span``
