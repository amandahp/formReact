import React from 'react'
import Menu from "../menu"
import './Header.css'



const Header = () => (
    <header className="app-header">
        <span className="app-header__logo"><img class="formsLoggo" src={'https://uploaddeimagens.com.br/images/002/943/543/full/untitled.png?1604194026'}></img></span>
        <Menu/>
    </header>
)

export default Header