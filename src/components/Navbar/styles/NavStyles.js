import styled from 'styled-components/macro';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link, NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
    border-bottom: 1px solid #bdbdbd;
    padding: 0 12px;
    padding-top: 14px;
    width: 100%;
    position: relative;
    background-color: white;
`;

export const ShowTopNav = styled.div`
    display: ${({showNav}) => (showNav? "block" : "none")};
`;

// Styling For Top Menu
export const TopMenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;    
`;

export const HomeLink = styled(Link)`
    text-decoration: none;
`;

export const LoginLink = styled(Link)`
    text-decoration: none;
    text-transform: capitalize;
    font-size: 14px;
`;



// Styleing For MenuWrapper
export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;

    background-color: white;
`;

export const MenuItemWrapper = styled(Slider)`
    max-width: 90%;
    height: 100%;
    padding: 0;

    .slick-list{
        height: 100%;
    }

    .slick-track{
        height: 100%;
    }

    .slick-slide{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const MenuLink = styled(NavLink)`
    font-size: 12px;
    font-weight: bold;
    text-decoration: none;
    padding: 15px 4px;
    transition: .3s;
    color: #bdbdbd;
    
    &:focus{
        outline: none;
    }
    
    &:hover{
        color: #9f9f9f;
    }
    
    &.active{
        color: black;
        border-bottom: 3px solid black;
    }
`;

export const Text = styled.p`
    flex-grow: 1;
    font-size: 16px;
    text-transform: capitalize;
    font-weight: bold;
`;


export const MenuToggle = styled.button`
    width: 60px;
    border: none;
    border-left: 1px solid #bdbdbd;
    background-color: white;
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content:center;

    &:focus{
        outline: none;
    }
`;

export const ModalMenu = styled.div`
    position: absolute;
    z-index: 999;
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,.6);
    margin-top: 0px;
    left: 0;
`;

export const ModalContent = styled.div`
    width: 100%;
    background-color: white;
    padding: 16px;
`;

export const ModalLink = styled(NavLink)`
    display: inline-block;
    font-size: 14px;
    text-decoration: none;
    padding: 8px 14px;
    border: 1px solid #e6e6e6;
    border-radius: 24px;
    margin: 0 8px 16px 0;
    cursor: pointer;
    font-weight: bold;
    color: black;
    transition: 0.3s;

    &:hover{
        background-color: #dcdcdc;
    }
    
    &.active{
        background-color: black;
        color: white;
    }
`;
