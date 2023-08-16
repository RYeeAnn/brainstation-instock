import React from 'react'
import './Header.scss';
import { NavLink } from 'react-router-dom';

import logo1 from '../../assets/Logo/InStock-Logo_1x.png'



function Header() {


  return (
    <div className="header">
        <img className="header__logo" src={logo1} alt="Instock" />
        <ul className="header__links" >
            <li className="header__link-listItem">
                <NavLink to="/warehouses" className="header__link">Warehouses</NavLink>
            </li>
            <li className="header__link-listItem">
                <NavLink to="/inventory" className="header__link">Inventory</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header