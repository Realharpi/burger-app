import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavItemMulti from '../NavItemMulti/NavItemMulti'

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            <NavItemMulti />
        </nav>
    </header>
  )
}

export default toolbar