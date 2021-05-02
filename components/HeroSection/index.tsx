import React from 'react';
import {
    HeroContainer,
    HeroBG,
    VideoBG,
    HeroH1,
    HeroP,
    HeroContent,
} from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer id='top'>
            <HeroBG>
                <VideoBG autoPlay={true} loop muted>
                    <source src="/Video/Video.mp4" type="video/mp4" />
                </VideoBG>
            </HeroBG>
            <HeroContent>
                <HeroH1>
                    Niome
                </HeroH1>
                <HeroP>
                    Animator | Developer
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
