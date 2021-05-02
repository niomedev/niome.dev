import React from 'react'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
        
} from './servicesElements'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src='/Svg/Animate.svg' />
                    <ServicesH2>Animation</ServicesH2>
                    <ServicesP>Ability ranges from creating Wallpapers, to Youtube Intros, Vtuber models, & much more.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src='/Svg/Development.svg' />
                    <ServicesH2>Development</ServicesH2>
                    <ServicesP>Discord Bots to Web developement, have the ability to create what the project requires.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
