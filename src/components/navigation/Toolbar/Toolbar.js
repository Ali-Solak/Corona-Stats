import React from 'react';

import classes from './Toolbar.css';
import DrawerToggle from "../sideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../UI/Logo/Logo";


const toolbar = (props) => {

    return (
        <React.Fragment>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
            <header className={classes.Toolbar}>
                <DrawerToggle clicked={props.drawerToggleClicked}/>
                <div className={classes.Text}>Corona Statistics</div>
                <div className={classes.Logo}><Logo /></div>
            </header>
        </React.Fragment>
    );
};

export default toolbar;
