import styled from 'styled-components';

export const CommandContainer = styled.div`
    background: #010606;
    color: #fff;
    
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const CommandWrapper = styled.div`
    align-items: center;
    display: grid;
    height: 980px;
    /* 860 */
    justify-content: center; 
    margin-left: auto;
    margin-right: auto;
    max-width: 1600px;
    padding: 0 24px;
    width: 100%;
    z-index: 1;
`

export const TabsDiv = styled.div`
    align-items: center;
    background: #202020;
    border-radius: 25px;
    display: table;
    justify-content: center;
    margin: 0;
    margin-top: 40px;
    max-height: 800px;
    max-width: 1200px;
    padding: 20px;

    /* @media screen and (max-width: 768px) {
        display: none;
    } */
`
export const BtnWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 10px;
    max-height: 400px;
    max-width: 1100px;

    /* @media screen and (max-width: 768px) {
        display: none;
    } */
`
export const Button = styled.button`
    background-color: #BA55D3;
    border: none;
    border-radius: 20px;
    color: #FFFFFF;
    cursor: pointer;
    font-size: 22px;
    margin: 5px;
    max-width: 800px;
    padding: 10px;
    text-align: center;
    transition: all 0.5s;

    &:hover{
        background-color: #481355;
    }

    &:active{
        background-color: #30142d;
    }
`

export const Ul = styled.ul`
    list-style: none;
    margin: 0 auto;
    padding: 0px;
`

export const TabDiv = styled.div`
    align-items: center;
    background: #282828;
    border-radius: 25px;
    display: flex;
    font-size: 20px;
    height: 50px;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 10px;
    max-height: 800px;
    max-width: 1100px;
    text-align: center;

    /* @media screen and (max-width: 768px) {
        display: none;
    } */
`

export const TabName = styled.div`
    width: 15%;
`

export const TabAlias = styled.div`
    width: 15%;
`

export const TabDesc = styled.div`
    width: 35%;
`

export const TabUsage = styled.div`
    width: 35%;
`