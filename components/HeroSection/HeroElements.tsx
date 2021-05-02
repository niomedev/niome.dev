import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #FF69B4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 980px;
    position: relative;
    z-index: 1;
`

export const HeroBG = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBG = styled.video`
    width: 105%;
    height: 105%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    margin: -5px;
    filter: blur(5px);
    transform: scale(1.05);
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #ffff;
    font-size: 96px;
    text-align: center;
    margin: 0;

    @media screen and (max-width: 768px){
        font-size: 88px;
    }

    @media screen and (max-width: 480px){
        font-size: 80px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 400px;
    margin: 0;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
