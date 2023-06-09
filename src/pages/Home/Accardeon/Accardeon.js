import React, {useState} from 'react';
import {MdArrowBackIosNew} from "react-icons/md";
import OpenAcc from "./openAcc";
import Accordion from "../../../assets/img/accordion.png"
import BookL from "../../../assets/img/Accortitle.svg"
import BookR from "../../../assets/img/accorimg.png"

const Accardeon = () => {

    return (
        <div id="wrapper">
            <div className="container">
                <div className="wrapper">
                    <h1>Появились вопросы?</h1>
                    <div className="wrapper--accordion">
                        <img className="wrapper--accordion--bookR" src={BookR} alt="img"/>

                            <img src={Accordion} alt="img"/>

                        <div className="wrapper--accordion__title">
                            <img className="wrapper--accordion__title--bookL" src={BookL} alt="img"/>
                            <OpenAcc/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Accardeon;