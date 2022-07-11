import React from "react"
import burgerLogo from '../../assets/images/burger-logo.png'
import classes from './Logo.css'

// We are getting props from wherever we have used Logo. Toolbar & Sidebar. 
const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>               {/* We are applying the css height and receiving the value as props from Toolbar. */}
        <img src={burgerLogo} alt="MyBurger" />
    </div>
)

export default logo