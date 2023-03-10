import React from 'react';
import avatar from '../images/logo.png'
import './UserBox.css';

function UserBox() {

    return (
        <div className="UserBox">
            <img src={avatar} alt='UserBox_controls' />
            <p>Гость</p>
            <div className='UserBox_controls'>
                <ul>
                    <li>Регистрация</li>
                    <li>Вход</li>
                </ul>
            </div>
        </div>
    );
}

export default UserBox;