import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from "./navItem/NavigationItem";


const navigationItems = () => (
    <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Corona Stats</NavigationItem>
            <NavigationItem link="/detailed" >Total Data</NavigationItem>
    </ul>
);

export default navigationItems;
