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
    align-items: center;
    width: 100%;
    margin: 0 auto;
`

export const Background = styled.body`
    background: #161616;
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
    box-sizing: border-box;

    @media screen and (max-width: 955px){
        font-size: 16px;
    }

    &:hover{
        background-color: #DB7093;
    }
`