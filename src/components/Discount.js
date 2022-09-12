import React from 'react';
import '../styles/Discount.scss';
import Vorus from '../images/vorus.png';
import Ginger from '../images/ginger-min.png';
import Nootris from '../images/nootris-min.png';

const Discount = () => {
    return (
        <section className="discount">
            <h2 className="discount__title">
                ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
                <React.Fragment><br /></React.Fragment>
                <span className="discount__title_sale">
                    СО СКИДКОЙ -15% ПЕРВЫМ!
                </span>
                <div className="discount__container">
                    <p className="discount__price">
                        750₽
                    </p>
                    <p className="discount__price_sale">
                        690₽
                    </p>
                </div>
                <div className="discount__container_bonus">
                    <ul className="bonus bonus__list">
                        <li className="bonus__item">
                            <img src={Ginger} className="bonus__item_picture" alt="Ginger" />
                            <span className="bonus__description">
                                Содержит
                            </span>
                            <span className="bonus__description_current">
                                имбирь
                            </span>
                        </li>
                        <li className="bonus__item">
                            <img src={Nootris} className="bonus__item_picture" alt="Nootris" />
                            <span className="bonus__description">
                                + Бесплатная доставка
                            </span>
                            <span className="bonus__description_current">
                                Специальная цена
                            </span>
                        </li>
                        <li className="bonus__item">
                            <img src={Vorus} className="bonus__item_picture" alt="Vorus" />
                            <span className="bonus__description">
                                Нейтрализует
                            </span>
                            <span className="bonus__description_current">
                                вирусы
                            </span>
                        </li>
                    </ul>
                </div>
            </h2>
        </section>
    )
}

export default Discount;