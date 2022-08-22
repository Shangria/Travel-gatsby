import React from 'react';
import styled from "styled-components";
import {Button} from "./Button";
import Video from '../assets/videos/video2.mp4';


const Hero = () => {
    return (
        <HeroWrap>
            <HeroBg>
                <VideoHero src={Video} type='video/mp4' autoPlay loop muted playsInline/>
            </HeroBg>
            <HeroContent>
                <HeroItem>
                    <HeroTitle>Let's do it together.</HeroTitle>
                    <HeroSubTitle>We travel the world in search of stories.<><br/></>
                        Come along for the ride.</HeroSubTitle>
                    <Button primary={false ? 1 : 0} big="false" round="true" to='/trips'>View Latest Posts</Button>
                </HeroItem>
            </HeroContent>
        </HeroWrap>
    );
};

export default Hero;


const HeroWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.colors.light};
  height: 100vh;
  position: relative;
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const VideoHero = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const HeroContent = styled.div`
  z-index: 2;
  padding: 20px;

  :before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgb(97 105 12) 0%, rgb(132 25 25 / 10%) 0%);;
    z-index: -6;
  }
`;


const HeroItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1.2;
`;

const HeroTitle = styled.h1`
  font-size: calc(2rem + 2vw);
  margin-bottom: 10px;
`;

const HeroSubTitle = styled.p`
  font-size: calc(0.5rem + 2vw);
  margin-bottom: 10px;
`;
