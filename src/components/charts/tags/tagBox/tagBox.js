import React from "react";
import classes from './tagBox.css'

const tagBox = (props) =>(
    <div className={classes.TagBox}>
        {props.children}
    </div>
);

export default tagBox;