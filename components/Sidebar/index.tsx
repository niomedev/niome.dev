import React from 'react'
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'
import Link from 'next/link'

const Sidebar = ( {isOpen, toggle} : {isOpen:any, toggle:any} ) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <Link href="#about" passHref>
                        <SidebarLink>About</SidebarLink>
                    </Link>
                    <Link href="#rie-commands" passHref>
                        <SidebarLink>Rie Commands</SidebarLink>
                    </Link>
                    <Link href="#manga" passHref>
                        <SidebarLink>Rie&apos;s Manga</SidebarLink>
                    </Link>
                    <Link href="#services" passHref>
                        <SidebarLink>Services</SidebarLink>
                    </Link>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    ) 
}

export default Sidebar
