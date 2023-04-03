import React from 'react';
import "./Follow.scss"
import Book1 from "./../../../assets/img/logo.svg"


const Follow = () => {
    return (
        <div>
            <div id="follow">
                <div className="container">
                    <div className="follow">
                        <div className="follow--book">
                            <img src={Book1} alt="" className="follow--book__book1"/>
                            <img src={Book1} alt="" className="follow--book__book2"/>
                        </div>
                        <div className="follow--title">
                            <h1>Подпишитесь сейчас за 250,00 $ / год</h1>
                            <p>И получи доступ ко всем нашим материалам и начинай развиватся сейчас вместе со всеми</p>
                        </div>
                        <div className="follow--buttons">
                            <button className="follow--buttons__followBtn">Подписаться</button>
                            <button className="follow--buttons__learnBtn">Узнать больше</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Follow;