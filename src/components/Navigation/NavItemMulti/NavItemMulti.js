import React from "react"
import classes from './NavItemMulti.css'
import NavItemSing from "./NavItemSing/NavItemSing"

const navItemMulti = () => (
    <ul className={classes.NavItemMulti}>
        <NavItemSing link="/" active>Burger Builder</NavItemSing>
        <NavItemSing link="/">Checkout</NavItemSing>
    </ul>
)



export default navItemMulti