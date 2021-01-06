import React from 'react'
import styled from "styled-components"

export const Hero = () => {
    return (
   <HeroContainer>
        <HeroBg>
            <VideoBg src ="" type="video/mp4" />
        </HeroBg>
        <HeroContent>
         <HeroItems>
            <HeroH1> Destination you want to see in your live !</HeroH1>
            <HeroP> Make your live happier! Travel </HeroP>
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
`

const HeroBg = styled.div``
const VideoBg = styled.div``

const HeroContent = styled.video``
const HeroItems = styled.video``
const HeroH1 = styled.video``
const HeroP = styled.video``
