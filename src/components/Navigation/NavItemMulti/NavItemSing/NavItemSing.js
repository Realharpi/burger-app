import { checkPropTypes } from "prop-types";
import React from "react";
import classes from './NavItemSing.css'

const navItemSing = (props) => (
    <li className={classes.NavItemSing}>
        <a href={props.link} className={props.active ? classes.active : null }>{props.children}</a>
    </li>
)


export default navItemSing