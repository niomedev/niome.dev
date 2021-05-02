import styled from 'styled-components';

export const Nav = styled.nav`
    align-items: center;
    background: ${({scrollNav}:{scrollNav:any}) => (scrollNav ? '#000' : 'transparent')};
    display: flex;    
    font-size: 1rem;
    height: 80px;
    justify-content: center;
    margin-top: -80px;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    height: 80px;
    justify-content: space-between;
    max-width: 1100px;
    padding: 0 24px;
    width: 100%;
    z-index: 1;    
`

export const NavLogo = styled.a`
    align-items: center;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size:  1.5rem;
    font-weight: bold;
    justify-self: flex-start;
    margin-left: 24px;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    align-items: center;
    display: flex;
    list-style: none;
    margin-right: -22px;
    text-align: center;
    
    @media screen and (max-width: 760px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled.a`
    align-items: center;
    color: white;
    cursor: pointer;
    display: flex;
    height: 100%;
    padding: 0 1rem;
    text-decoration: none;

    &.active {
        border-bottom: 3px solid #FF69B4;
    }
`