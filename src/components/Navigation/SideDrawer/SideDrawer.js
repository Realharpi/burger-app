import React from "react"
import Auxx from '../../../hoc/Auxx'
import classes from './SideDrawer.css'
import Logo from '../../Logo/Logo'
import NavItemMulti from '../NavItemMulti/NavItemMulti'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Auxx>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
            <Logo height="11%" />                       {/* We are sending the css height as a children to Logo. */}
            <nav>
                <NavItemMulti />
            </nav>
        </div>
        </Auxx>        
    )
}



export default sideDrawer