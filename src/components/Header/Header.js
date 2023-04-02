import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "./../../assets/img/logo.svg"
import { CiUser } from "react-icons/ci"


const Header = () => {

    const [menu, setMenu] = useState(false)

    return (
        <div id='header'>
            <div className='container'>
                <div className='header'>
                    <div className='header--logo'>
                        <img src={Logo} alt='logo' />
                        <span>SELF DEVELOPING SCHOOL</span>
                    </div>
                    <nav className='header--navbar'>
                        <NavLink to={"/"} >Главная</NavLink>
                        <NavLink to={"/"} >Наши курсы</NavLink>
                        <NavLink to={"/"} >О нас</NavLink>
                    </nav>
                    <div className='header--login'>
                        <button className='header--login__btn' > <CiUser className='header--login__btn--icon' />Войти</button>
                    </div>
                    <div className='header--menu'>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;