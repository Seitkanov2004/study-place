import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "./../../assets/img/logo.svg"
import { CiUser } from "react-icons/ci"


const Header = () => {

    const [menu, setMenu] = useState(false)

    return (
        <div id='header'>
            <div className='container'>
                <div className="header--child">
                    <div className='header'>
                        <div className='header--logo'>
                            <img src={Logo} alt='logo' style={{
                                width: menu ? "30%" : "88%"
                            }} />
                            <span style={{
                                display: menu ? "block" : "none"
                            }}>SELF DEVELOPING SCHOOL</span>
                        </div>
                        <nav className='header--navbar'>
                            <NavLink to={"/"} >Главная</NavLink>
                            <NavLink to={"/our-cours"} >Наши курсы</NavLink>
                            <NavLink to={"/about-us"} >О нас</NavLink>
                        </nav>
                        <div className='header--login'>
                            <button className='header--login__btn' >
                                <CiUser className='header--login__btn--icon' />Войти</button>
                        </div>
                        <div onClick={() => setMenu(!menu)} className='header--menu'>
                            <div className='header--menu__parentMenu'>
                                <div className={menu ? "header--menu__parentMenu--one" : ""} />
                                <div className={menu ? "header--menu__parentMenu--tow" : ""} />
                                <div className={menu ? "header--menu__parentMenu--three" : ""} />
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: menu? "block" : "none",
                    }}>
                        <div className="header--nav" >
                            <NavLink to={"/"} >Главная</NavLink>
                            <NavLink to={"/"} >Наши курсы</NavLink>
                            <NavLink to={"/"} >О нас</NavLink>
                            <button className='header--towBtn'><CiUser className='header--towBtn__icon' />Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;