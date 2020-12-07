import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

import toolbarCss from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={toolbarCss.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={toolbarCss.Logo}>
            <Logo />
        </div>
        <nav className={toolbarCss.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);


export default toolbar