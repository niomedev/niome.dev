import styled from 'styled-components';

export const ServicesContainer = styled.div`
    align-items: center;
    background: #010606;
    display: flex;
    flex-direction: column;
    height: 800px;
    justify-content: center;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
    align-items: center;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr;
    }
`

export const ServicesCard = styled.div`
    align-items: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: flex-start;
    padding: 30px;
    transition: all 0.2 ease-in-out;

    &:hover {
        cursor: pointer;
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    margin-bottom: 10px;
    width: 160px;
`

export const ServicesH1 = styled.h1`
    color: #fff;
    font-size: 2.5rem;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`