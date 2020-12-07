import React from 'react';

import buttonCss from './Button.module.css';

const button = (props) => (
    <button
        className={[buttonCss.Button, buttonCss[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);


export default button