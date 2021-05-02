import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem} from './NavbarElements'
import Link from 'next/link'

const Navbar = ({ toggle } : { toggle:any }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 900){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <Link href="#top" passHref>
                        <NavLogo>Niome.dev</NavLogo>
                    </Link>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <Link href="#about" passHref>
                                <NavLinks>About</NavLinks>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="#rie-commands" passHref>
                                <NavLinks>Rie Commands</NavLinks>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="#manga" passHref>
                                <NavLinks>Rie's Manga</NavLinks>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="#services" passHref>
                                <NavLinks>Services</NavLinks>
                            </Link>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
  };
  
export default Navbar;