import React from 'react';

import logoCss from './Logo.module.css'

import burgerLogo from '../../assets/images/burger-logo.png'

const logo = (props) => (
    <div className={logoCss.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);


export default logo