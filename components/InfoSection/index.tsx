import React from 'react'
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

const InfoSection = ({lightBg, id, imgStart, lightText, darkText, topline, headline, description, img, alt, btnEnable, btnLabel, btnUrl} : {lightBg:any, id:any, imgStart:any, lightText:any, darkText:any, topline:any, headline:any, description:any, img:any, alt:any, btnEnable:any, btnLabel:any, btnUrl:any}) => {
    return (
        <>
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
        </>
    )
}

export default InfoSection
