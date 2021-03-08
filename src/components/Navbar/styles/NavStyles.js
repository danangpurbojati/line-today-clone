import styled from 'styled-components/macro';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 


export const TopMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    /* height: 30px; */
    /* margin-bottom: 24px; */
    /* border: 1px solid blue; */
`;

export const MenuItemWrapper = styled(Slider)`
    max-width: 90%;
    height: 100%;

    .slick-list{
        height: 100%;
    }

    .slick-track{
        height: 100%;
    }

    .slick-slide{
        /* border-bottom: 1px solid blue; */
        /* height: 100%; */
        display: flex;
        align-items: center;
    }

    .slick-current{
        bakcground: red;
    }

`;

export const MenuToggle = styled.button`
    width: 100px;
    border: none;
    border-left: 1px solid grey;
    /* flex-grow: 1; */
    background-color: white;
    cursor: pointer;

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
    overflow-y: hidden;
    margin-top: 24px;
`;

export const ModalContent = styled.div`
    width: 100%;
    background-color: white;
`;

export const ModalItem = styled.button`
    padding: 8px 16px;
    border: 1px solid black;
    border-radius: 24px;
    margin: 0 8px 16px 0;
    cursor: pointer;
    font-weight: bold;

    &:focus{
        outline: none;
    }

    &:hover{
        background-color: #DCDCDC;
    }
    
    &.active{
        background-color: black;
        color: white;
    }
`;