import React, { useState } from 'react';
import aboutBook from "./../../../assets/img/aboutBook.png"

const Staty = () => {

    const [books, setBooks] = useState([1,2,3])
    const [books1, setBooks1] = useState([1,2])

    return (
        <div id="books">
            <div className="container">
                <div className="books">
                    <div className="books--tabs">
                        <div className="books--tabs__btn">Все разделы</div>
                        <div className="books--tabs__btn">Новое</div>
                        <div className="books--tabs__btn">Софт-скилс</div>
                        <div className="books--tabs__btn">Книги</div>
                        <div className="books--tabs__btn">Окружение</div>
                    </div>

                    <div className="books--block">
                        {
                            books.map(el => (
                                <div className='books--block__aboutBook'>
                                    <h2>С какой книги начать?</h2>
                                    <div className='books--block__aboutBook--start'>
                                        <h4>Полезные статьи</h4>
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                    <img src={aboutBook} alt="" />
                                    <div className="books--block__aboutBook--line"/>
                                    <div className='books--block__aboutBook--end'>
                                        <h3>Автор: Muslim Bolot</h3>
                                        <h3>Дата: 22.08.22</h3>
                                    </div>
                                </div>

                            ))
                        }
                    </div>

                    <div className='books--'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Staty;