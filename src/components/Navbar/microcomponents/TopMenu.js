import React from 'react';
import { HomeLink, LoginLink, TopMenuWrapper } from '../styles/NavStyles';
import LogoImage from '../../../assets/images/logo.svg';

const TopMenu = () => {
    return (
        <TopMenuWrapper>
            <HomeLink to="/" >
                <img src={LogoImage} alt="logo"/>
            </HomeLink>
            <LoginLink to="/">masuk</LoginLink>
        </TopMenuWrapper>
    )
}

export default TopMenu
