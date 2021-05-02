import styled from 'styled-components'

export const HeroContainer = styled.div`
    align-items: center;
    background: #FF69B4;
    display: flex;
    height: 980px;
    justify-content: center;
    padding: 0 30px;
    position: relative;
    z-index: 1;
`

export const HeroBG = styled.div`
    bottom: 0;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
`

export const VideoBG = styled.video`
    -o-object-fit: cover;
    background: #232a34;
    filter: blur(5px);
    height: 105%;
    margin: -5px;
    object-fit: cover;
    transform: scale(1.05);
    width: 105%;
`

export const HeroContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    padding: 8px 24px;
    position: absolute;
    z-index: 3;
`

export const HeroH1 = styled.h1`
    color: #ffff;
    font-size: 96px;
    margin: 0;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 88px;
    }

    @media screen and (max-width: 480px){
        font-size: 80px;
    }
`

export const HeroP = styled.p`
    color: #fff;
    font-size: 24px;
    margin: 0;
    margin-top: 24px;
    max-width: 400px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
