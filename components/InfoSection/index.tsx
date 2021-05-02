import React, { FC } from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    Column2,
    ImgWrap,
    Img,
    BtnWrap,
    Button,
    BtnLink,
} from './InfoElements'

export type HomeObject = {
    id: string;
    lightBg: boolean;
    lightText: boolean;
    lightTextDesc: boolean;
    topline: string;
    headline: string;
    description: string;
    btnEnable: boolean;
    btnLabel: string;
    btnUrl: string;
    imgStart: boolean;
    img: string;
    dark: boolean;
    alt: string;
    primary: boolean;
    darkText: boolean;
}

const InfoSection: FC<HomeObject> = ({id, lightBg, lightText, imgStart, darkText, topline, headline, description, img, alt, btnEnable, btnLabel, btnUrl}) => {
    return (
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>
                                {topline}
                            </TopLine>
                            <Heading lightText={lightText}>
                                {headline}
                            </Heading>
                            <Subtitle darkText={darkText}>
                                {description}
                            </Subtitle>
                            <BtnWrap btnEnable={btnEnable}>
                                <BtnLink target="_blank" href={btnUrl}>
                                    <Button>{btnLabel}</Button>
                                </BtnLink>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    )
}

export default InfoSection
