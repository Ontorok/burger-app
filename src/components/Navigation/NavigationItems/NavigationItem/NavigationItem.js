import React from 'react';

import navigationItemCss from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={navigationItemCss.NavigationItem}>
        <a
            href={props.link}
            className={props.active ? navigationItemCss.active : null}>{props.children}</a>
    </li>
);


export default navigationItem