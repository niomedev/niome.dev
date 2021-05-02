import styled from 'styled-components';

export const CommandContainer = styled.div`
    color: #fff;
    background: #010606;
    
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const CommandWrapper = styled.div`
    display: grid;
    align-items: center;
    z-index: 1;
    /* 860 */
    height: 980px; 
    width: 100%;
    max-width: 1600px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const TabsDiv = styled.div`
    display: table;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background: #202020;
    margin: 0;
    margin-top: 40px;
    padding: 20px;
    width: 1200px;
    max-width: 1200px;
    max-height: 800px;
`
export const BtnWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 1100px;
    max-width: 1100px;
    margin-bottom: 10px;
    max-height: 400px;
`
export const Button = styled.button`
    border-radius: 20px;
    background-color: #BA55D3;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 22px;
    padding: 10px;
    max-width: 800px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;

    &:hover{
        background-color: #481355;
    }

    &:active{
        background-color: #30142d;
    }
`

export const Ul = styled.ul`
    padding: 0px;
    margin: 0 auto;
    list-style: none;
`

export const TabDiv = styled.div`
    margin-bottom: 10px;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 25px;
    background: #282828;
    width: 1100px;
    max-width: 1100px;
    font-size: 20px;
    height: 50px;
    max-height: 800px;
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