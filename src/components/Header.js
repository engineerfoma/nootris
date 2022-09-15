import React from 'react';
import '../styles/Header.scss';
import Logo from '../images/logo.svg';
import Trash from '../images/basket.svg'


const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src={Logo} alt="logo" className="header__logo" />
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__list_item hover_o">
              FAQ
            </li>
            <li className="header__list_item">
              Оплата и доставка
            </li>
            <li className="header__list_item">
              Возврат
            </li>
            <li className="header__list_item">
              Исследования
            </li>
            <li className="header__list_item">
            Личный кабинет
            </li><li className="header__list_item">
              8 8 (800) 600-09-90
            </li>
          </ul>
        </nav>
        <img src={Trash} alt="trash" className="header__basket" />
      </div>
    </header>
  )
}

export default Header;