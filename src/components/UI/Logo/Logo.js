import React from 'react';

import virusPic from '../../../assets/virus.svg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={virusPic} alt="Virus" />
    </div>
);

export default logo;