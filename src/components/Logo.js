import React from 'react';
import logo from '../images/logo.png'
import './Logo.css';

function Logo() {

    return (
        <div className="Logo">
            <img src={logo} alt='logo' />
            <div>
            <p>Магазин</p>
            </div>
        </div>
    );
}

export default Logo;