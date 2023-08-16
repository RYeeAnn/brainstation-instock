import React from 'react'
import './Header.scss';
import { Link } from 'react-router-dom';

import logo1 from '../../assets/Logo/InStock-Logo_1x.png'
import logo2 from '../../assets/Logo/InStock-Logo_2x.png'

function Header() {
  return (
    <div className="header">
        <img className="header__logo" src={logo1} alt="Instock" />
        <ul className="header__links">
            <li>
                <Link className="header__link header__link--active">Warehouses</Link>
            </li>
            <li>
                <Link className="header__link">Inventory</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header