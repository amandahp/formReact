import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

const Menu = () => (
    <nav class="app-menu">
        <ul className="app-menu__list">
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/cadastro"> 
                <button className="butCadastro"> CADASTRO </button>
                </Link>
            </li>
            <li className="app-menu__item">
                <Link className="app-menu__link" to="/login">
                <button className="butLogin">LOGIN</button>
                </Link>
            </li>            
        </ul>
    </nav>
)

export default Menu
