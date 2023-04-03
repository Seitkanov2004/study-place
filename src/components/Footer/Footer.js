import React from 'react';
import book from "./../../assets/img/logo.svg"
import { NavLink } from 'react-router-dom';
import { BsInstagram, BsFacebook, BsTwitter, BsTelegram } from 'react-icons/bs';
import { AiOutlineYoutube, AiOutlineMail } from "react-icons/ai"
import { FaTiktok } from "react-icons/fa"
import { IoCallOutline } from "react-icons/io5"
import { SlSocialVkontakte } from "react-icons/sl"
import { BiMap } from "react-icons/bi"
import { Tb123 } from "react-icons/tb"


const Footer = () => {
    return (
        <div id='footer'>
            <div className='container'>
                <div className='footer'>
                    <img className='footer--book1' src={book} alt="" />
                    <img className='footer--book2' src={book} alt="" />
                    <div className="footer--logo">
                        <div className="footer--logo__icon">
                            <img src={book} alt="" />
                            <span>SELF  DEVELOPING SCHOOL</span>
                        </div>
                        <div className="footer--logo__language">
                            <button>КГ</button>
                            <button>РУ</button>
                        </div>
                    </div>
                    <div className="footer--navbar">
                        <h2>Быстрые ссылки</h2>
                        <div />
                        <NavLink to={"/"}>Главная</NavLink>
                        <NavLink to={"/"}>Школа</NavLink>
                        <NavLink to={"/"}>О нас</NavLink>
                    </div>

                    <div className='footer--web'>
                        <h2>Социальные сети</h2>
                        <div className='footer--web__line' />
                        <div className="footer--web__icons">
                            <BsInstagram />
                            <AiOutlineYoutube />
                            <BsFacebook />
                            <BsTwitter />
                            <FaTiktok />
                            <SlSocialVkontakte />
                            <BsTelegram />
                        </div>
                    </div>
                    <div className="footer--contacts">
                        <h2>Контакты</h2>
                        <div />
                        <div>
                            <IoCallOutline />
                            0500 678 876
                        </div>
                        <div>
                            <AiOutlineMail />
                            Self_dev_school@gmail.com
                        </div>
                    </div>
                    <div className="footer--map">
                        <div>
                            <BiMap />
                            ИП Сейсембай, г.Алматы, мкр. Нурлытау, ул. Мерген, 93.
                        </div>
                        <div>
                            <Tb123 />
                            Идентификационный код: 661102300013
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;