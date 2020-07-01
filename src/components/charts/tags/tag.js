import React from "react";
import classes from './tag.css'

const tag = (props) =>(
    <div className={classes.Tag}>
        <div>{props.titel}</div>
        {props.spinner}
        {props.children}
    </div>
);

export default tag;