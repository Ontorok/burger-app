import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/_Aux/_Aux';

import sideDrawerCss from './SideDrawer.module.css'

const sideDrawer = (props) => {
    let attachedClasses = [sideDrawerCss.SideDrawer, sideDrawerCss.Close];
    if (props.open) {
        attachedClasses = [sideDrawerCss.SideDrawer, sideDrawerCss.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={sideDrawerCss.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer