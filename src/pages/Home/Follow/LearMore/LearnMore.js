import React from 'react';
import {BsCheckLg} from "react-icons/bs"
import "./LearnMore.scss"
import {BsCheck2} from "react-icons/bs"
import {MdClose} from "react-icons/md"

const LearnMore = () => {
    return (
        <div id="learnMore">
            <div className="container">
                <div className="learnMore">
                    <p className="learnMore--p">Пакеты / Подробнее о пакетах</p>
                    <h1 className="learnMore--titleh1">ВЫБЕРИТЕ СВОЙ ПАКЕТ УЧАСТИЯ</h1>
                    <p className="learnMore--titleP">Присоединяйтесь к нам и начните свой путь к успеху.</p>
                    <div className="learnMore--cards">
                        <div className="learnMore--cards__card1">
                            <h1>Обычный</h1>
                            <div className="learnMore--cards__card1--inputMonth">
                                <input type="radio" id="radioMonth"/>
                                <label htmlFor="radioMonth">Ежемесячно</label>
                            </div>
                            <div className="learnMore--cards__card1--inputYear">
                                <input type="radio" id="radioYear"/>
                                <label htmlFor="radioYear">Ежегодно</label>
                            </div>
                            <div className="learnMore--cards__card1--icons" >
                                <h2><BsCheckLg/></h2>
                                <p>Все новые статьи</p>
                            </div>
                            <div className="learnMore--cards__card1--icons">
                                <h2><BsCheckLg/></h2>
                                <p>Все мастер классы по саморозвитию</p>
                            </div>
                            <h2 className="learnMore--cards__card1--prace">Цена: <b>225$</b> </h2>
                            <button className="learnMore--cards__card1--btnFollow">Подписаться</button>
                        </div>
                        <div className="learnMore--cards__card1">
                            <h1>Интенсив</h1>
                            <div className="learnMore--cards__card1--inputMonth">
                                <input type="radio" id="radioMonth"/>
                                <label htmlFor="radioMonth">Ежемесячно</label>
                            </div>
                            <div className="learnMore--cards__card1--inputYear">
                                <input type="radio" id="radioYear"/>
                                <label htmlFor="radioYear">Ежегодно</label>
                            </div>
                            <div className="learnMore--cards__card1--icons" >
                                <h2><BsCheckLg/></h2>
                                <p>Все новые статьи</p>
                            </div>
                            <div className="learnMore--cards__card1--icons">
                                <h2><BsCheckLg/></h2>
                                <p>Все мастер классы по саморозвитию</p>
                            </div>
                            <div className="learnMore--cards__card1--icons">
                                <h2><BsCheckLg/></h2>
                                <p>Курс по чтению языка тела</p>
                            </div>
                            <div className="learnMore--cards__card1--icons">
                                <h2><BsCheckLg/></h2>
                                <p>Курс по накоплению средств с выполотой долгов</p>
                            </div>
                            <div className="learnMore--cards__card1--icons">
                                <h2><BsCheckLg/></h2>
                                <p>Курс по быстрому карьерному росту</p>
                            </div>
                            <div className="learnMore--cards__card1--icons">
                                <h2><BsCheckLg/></h2>
                                <p>Курс по одолеванию страха потери</p>
                            </div>
                            <h2 className="learnMore--cards__card1--prace2">Цена: <b>750$</b> </h2>
                            <button className="learnMore--cards__card1--btnFollow">Подписаться</button>
                        </div>

                    </div>
                    <div className="learnMore--info">
                        <p>В <b>“Обычный”</b> пакет участия для само-развития включает в себя: </p>
                        <div className="learnMore--info__fraces">
                            <div className="learnMore--info__fraces--icon" >
                                <h2><BsCheck2/></h2>
                                <p>Все новые статьи</p>
                            </div>
                            <div className="learnMore--info__fraces--icon" >
                                <h2><BsCheck2/></h2>
                                <p>Все мастер классы по саморозвитию</p>
                            </div>
                            <div className="learnMore--info__fraces--icon" >
                                <h2><MdClose/></h2>
                                <p>Курс по чтению языка тела</p>
                            </div>
                            <div className="learnMore--info__fraces--icon" >
                                <h2><MdClose/></h2>
                                <p>Курс по накоплению средств с выполотой долгов</p>
                            </div>
                            <div className="learnMore--info__fraces--icon" >
                                <h2><MdClose/></h2>
                                <p>Курс по быстрому карьерному росту</p>
                            </div>
                            <div className="learnMore--info__fraces--icon" >
                                <h2><MdClose/></h2>
                                <p>Курс по одолеванию страха потери</p>
                            </div>
                        </div>
                    </div>
                    <div className="learnMore--plusPackag">
                        <h3>Плюсы пакета</h3>
                        <p>Выбрав этот пакет вы получаете возможность получать неогранниченное количество самых эксклюзивных мастер классов, а также очень много наиполезнейших статей от самых разных успешных людей чтобы получать ежедневные уроки чтобы улучшить жизнь и не только</p>
                    </div>
                </div>
            </div>


        </div>);
};

export default LearnMore;