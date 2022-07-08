import React from 'react'
import classes from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControls}>
        <div className={classes.Label}>{props.label}</div>
        <button 
            className={classes.Less} 
            onClick={props.removed}                         // Less button is attached to removed which was passed as props in BuildControls.js
            disabled={props.disabled}>Less</button>         
        <button 
            className={classes.More}                        // More button is attached to added which was passed as props in BuildControls.js
            onClick={props.added}>More</button>            {/*  */}
    </div>
)

export default buildControl