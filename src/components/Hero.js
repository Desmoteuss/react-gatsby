import React from 'react'
import styled from "styled-components"
import { Button } from './Button'
import Video from '../assets/videos/travel6.mp4'

export const Hero = () => {
    return (
   <HeroContainer>
        <HeroBg>
            <VideoBg src = { Video } type="video/mp4" autoPlay  loop muted playsInLine/>
        </HeroBg>
        <HeroContent>
         <HeroItems>
            <HeroH1> Destination you want to see in your live !</HeroH1>
            <HeroP> Make your live happier! Travel </HeroP>
            <Button> Time to Travel!</Button>
        </HeroItems>
        </HeroContent>
   </HeroContainer>
    )
}


export default Hero

const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
padding: 0 1rem;
position: relative;
margin-top: -80px;
color: #fff;
`

const HeroBg = styled.div``
const VideoBg = styled.video``

const HeroContent = styled.div``
const HeroItems = styled.div``
const HeroH1 = styled.div``
const HeroP = styled.div``
