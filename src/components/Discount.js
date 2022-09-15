import React from 'react';
import '../styles/Discount.scss';
import Vorus from '../images/vorus.png';
import Ginger from '../images/ginger-min.png';
import Nootris from '../images/nootris-min.png';
import Button from '../components/Button';

const Discount = () => {
    return (
        <section className="discount">
            <h2 className="discount__title">
                ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
                <React.Fragment><br /></React.Fragment>
                <span className="discount__title_sale">
                    СО СКИДКОЙ -15% ПЕРВЫМ!
                </span>
            </h2>
            <div className="discount__container">
                <p className="discount__price">
                    750₽
                </p>
                <p className="discount__price_sale">
                    690₽
                </p>
            </div>
            <ul className="bonus bonus__list">
                <li className="bonus__item">
                    <img src={Ginger} className="bonus__item_picture" alt="Ginger" />
                    <p className="bonus__description">
                        Содержит
                    </p>
                    <p className="bonus__description bonus__description_current">
                        имбирь
                    </p>
                </li>
                <li className="bonus__item_big">
                    <img src={Nootris} className="bonus__item_picture_big" alt="Nootris" />
                    <p className="bonus__description_big">
                        + Бесплатная доставка
                    </p>
                    <p className="bonus__description_current-big">
                        Специальная цена
                    </p>
                </li>
                <li className="bonus__item bonus__item_vorus">
                    <img src={Vorus} className="bonus__item_picture" alt="Vorus" />
                    <p className="bonus__description">
                        Нейтрализует
                    </p>
                    <p className="bonus__description bonus__description_current">
                        вирусы
                    </p>
                </li>
            </ul>
            <div className="button__container">
                <Button>Оформить заказ!</Button>
            </div>
        </section>
    )
}

export default Discount;