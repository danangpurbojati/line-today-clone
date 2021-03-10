import React, { useState, useEffect } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import LinearProgress from '@material-ui/core/LinearProgress';
import { 
    MenuToggle, 
    MenuItemWrapper, 
    MenuWrapper, 
    ModalMenu, 
    ModalContent,
    MenuLink,
    Text,
    ModalLink,
} from '../styles/NavStyles';

const Menu = ({categories}) => {
    const [menuToggle, setMenuToggle] = useState(false);

    const openMenu = () => {
        setMenuToggle(!menuToggle);
    };

    const closeMenu = () => {
        setMenuToggle(false)
    }

    useEffect(() => {
        if(menuToggle){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }

        const test = document.getElementById('modal');

        window.onclick = (event) => {
            if(event.target === test){
                closeMenu();
            }
        }
    }, [menuToggle])

    const settings = {
        focusOnSelect: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 9,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5
                }
            }
        ],
    };

    return (
        <>
            {
                categories.length > 0 ? (
                    <div>
                    <MenuWrapper>
                        {
                            !menuToggle ? (
                                <MenuItemWrapper {...settings}>
                                    {
                                        categories.map(menu => (
                                            <MenuLink to={`/${menu.name}`} key={menu.id}>{menu.name}</MenuLink>
                                        ))
                                    }
                                </MenuItemWrapper>
                            ) : (
                                <Text>kategori</Text>
                            )
                        }

                        <MenuToggle onClick={openMenu}>
                            {
                                menuToggle ? <FaAngleUp /> : <FaAngleDown />
                            }
                        </MenuToggle> 
                    </MenuWrapper>
                    
                    <div>
                        {
                            menuToggle && (
                                <ModalMenu id="modal">
                                    <ModalContent >
                                        {
                                            categories.map(menu => (
                                                <ModalLink onClick={closeMenu} key={menu.id} to={`/${menu.name}`}>
                                                    {menu.name}
                                                </ModalLink>
                                            ))
                                        }

                                    </ModalContent>
                                </ModalMenu>
                            )
                        }
                    </div>   
                    </div>
                ) : (
                    <LinearProgress />
                )
            }
             
        </>
    )
}

export default Menu
