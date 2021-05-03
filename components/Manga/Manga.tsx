import styled from 'styled-components';

export const ImageContainer = styled.div`
    background: #161616;
    display: flex;
    height: auto;
    width: 100%;
    justify-content: center;
`
export const Text = styled.h1`
    color: white;
    font-size:48px;
    text-align: center;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 768px){
        font-size: 36px;
    }
`

export const Image = styled.img`
    height: auto;
    width: 65%;

    @media screen and (max-width: 955px){
        width: 100%;
    }
`

export const ButtonContainer = styled.div`
    background: #161616;
    display: flex;
    justify-content: center;
`

export const Background = styled.body`
    background: #161616;
`