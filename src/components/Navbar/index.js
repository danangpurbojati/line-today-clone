import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';



import dummyCategories from '../../assets/dummyData/categoryList';
import { MenuToggle, MenuItemWrapper, MenuWrapper, ModalMenu, ModalContent, ModalItem, TopMenu } from './styles/NavStyles';

const Navbar = () => {
    const [categories] = useState(dummyCategories);
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

        const test = document.getElementById('testReact');

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
        ]
    };

    return (
        <div style={{position: "relative"}}>
            <TopMenu>
                <h1>line today</h1>
                <button>login</button>
            </TopMenu>

            <MenuWrapper>
                {
                    !menuToggle ? (
                        <MenuItemWrapper {...settings}>
                            {
                                categories.map(menu => (
                                    <p key={menu.id}>{menu.name}</p>
                                ))
                            }
                        </MenuItemWrapper>
                    ) : (
                        <p style={{flexGrow: 1}}>kategori</p>
                    )
                }

                <MenuToggle onClick={openMenu}>
                    {
                        menuToggle ? "Close" : "Open" 
                    }
                </MenuToggle> 
            </MenuWrapper>

            {
                menuToggle && (
                    <ModalMenu id="testReact">
                        <ModalContent >
                            {
                                categories.map(menu => (
                                    <ModalItem key={menu.id}>{menu.name}</ModalItem>
                                ))
                            }

                        </ModalContent>
                    </ModalMenu>
                )
            }
        </div>
    )
}

export default Navbar
