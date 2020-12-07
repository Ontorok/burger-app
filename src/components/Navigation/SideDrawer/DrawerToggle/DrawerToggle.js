import React from 'react';

import drawerToggleCss from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <div className={drawerToggleCss.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);


export default drawerToggle