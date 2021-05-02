import styled from 'styled-components';

type InfoContainerProps = {
    lightBg: boolean;
}

export const InfoContainer = styled.div<InfoContainerProps>`
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
    color: #fff;
    
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    height: 980px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 1100px;
    padding: 0 24px;
    width: 100%;
    z-index: 1;
`

type InfoRowProps = {
    imgStart: boolean;
}

export const InfoRow = styled.div<InfoRowProps>`
    align-items: center;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    grid-area: col1;
    margin-bottom: 15px;
    padding: 0 15px;
`

export const Column2 = styled.div`
    grid-area: col2;
    margin-bottom: 15px;
    padding: 0 15px;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-bottom: 60px;
    padding-top: 0;
`

export const TopLine = styled.p`
    color: #FF69B4;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    line-height: 16px;
    margin-bottom: 16px;
    text-transform: uppercase;
`

type HeadingProps = {
    lightText: boolean;
}

export const Heading = styled.h1<HeadingProps>`
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
    font-size: 48px;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 24px;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

type SubtitleProps = {
    darkText: boolean;
}

export const Subtitle = styled.p<SubtitleProps>`
    color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 35px;
    max-width: 440px;
`

export const ImgWrap = styled.div`
    height: 100%;
    max-width: 555px;
`
export const Img = styled.img`
    margin: 0 0 10px;
    padding-right: 0px;
    width: 100%;  
`

type BtnWrapProps = {
    btnEnable: boolean;
}

export const BtnWrap = styled.div<BtnWrapProps>`
    display: ${({ btnEnable }) => (btnEnable ? 'flex' : 'none')};
    justify-content: flex-start;    
`

export const Button = styled.button`
    background-color: #FF69B4;
    border: none;
    border-radius: 20px;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-size: 22px;
    margin: 5px;
    max-width: 250px;
    padding: 10px;
    text-align: center;
    transition: all 0.5s;
    width: 250px;

    &:hover{
        background-color: #DB7093;
    }
`

export const BtnLink = styled.a`
    color: #fff;
    font-size: 24px;
`