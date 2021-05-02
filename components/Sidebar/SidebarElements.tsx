import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

type SidebarContainerProps = {
    isOpen: boolean;
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
    align-items: center;
    background: #0d0d0d;   
    display: grid;
    height: 100%;
    left: 0;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    position: fixed;
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    top: 0;
    transition: 0.3s ease-in-out;
    width: 100%;
    z-index: 999;
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    background: transparent;
    cursor: pointer;
    font-size: 2rem;
    outline: none;
    position: absolute;
    right: 1.5rem;
    top: 1.2rem;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarLink = styled.a`
    align-items: center;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    list-style: none;
    text-decoration: none;
    text-decoration: none;
    transition: 0.2s ease-in-out;

    &:hover{
        color: pink;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: (6, 60px);
    }
`;
