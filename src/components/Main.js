import React from 'react';
import '../styles/Main.scss';
import Lemon from '../images/lemon.png';
import Ginger from '../images/ginger.png';
import Nootris from '../images/nootris.png';

const Main = () => {
    return (
        <section className="main">
            <div className="main__container">
                <h1 className="main__title">АКТИВИРУЙ ИММУНИТЕТ!</h1>
                <p className="main__title_description">Всего пять секунд в день помогут укрепить иммунитет
                    и повысить защитные силы организма</p>
                <h3 className="main__subtitle">NOOTRIS ПОМОГАЕТ</h3>
                <p className="main__subtitle_description">Вашему организму во время пандемии
                    и сезонных простуд</p>
            </div>
            <img src={Lemon} className="main__picture main__picture_lemon" alt="lemon" />
            <img src={Nootris} className="main__picture main__picture_nootris" alt="nootris" />
            <img src={Ginger} className="main__picture main__picture_ginger" alt="ginger" />
        </section>
    )
}

export default Main;