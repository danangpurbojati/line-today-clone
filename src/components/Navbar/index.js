import React, { useState, useEffect } from 'react';
import TopMenu from './microcomponents/TopMenu';
import { NavWrapper, ShowTopNav } from './styles/NavStyles';
import Menu from './microcomponents/Menu';

const Navbar = ({categories}) => {
    const [ showNav, setShowNav] = useState(true);

    const scrollNav = () => {
        if(window.scrollY > 60){
            setShowNav(false)
        }else{
            setShowNav(true)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollNav);
    }, [])

    return (
        <NavWrapper>
            <ShowTopNav showNav={showNav}>
                <TopMenu />
            </ShowTopNav>

            <Menu categories={categories} />
        </NavWrapper>
    )
}

export default Navbar
