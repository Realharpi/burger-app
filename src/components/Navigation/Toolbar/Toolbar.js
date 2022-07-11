import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavItemMulti from '../NavItemMulti/NavItemMulti'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <Logo height="80%" />              {/* We are sending the css height as a children to Logo. */}
        <nav className={classes.DesktopOnly}>
            <NavItemMulti />
        </nav>
    </header>
  )
}

export default toolbar