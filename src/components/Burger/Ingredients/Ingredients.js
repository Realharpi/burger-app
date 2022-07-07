import React, { Component } from "react";
import PropTypes from 'prop-types';
import classes from './Ingredients.css';

class Ingredients extends Component {
    render () {
        let ingred = null
        
        switch ( this.props.type ) {
        case ('bread-bottom'):
            ingred = <div className={classes.BreadBottom}></div>
            break;
        case ('bread-top'):
            ingred = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            )
            break;
            case ('meat'):
                ingred = <div className={classes.Meat}></div>
                break;
            case ('cheese'):
                ingred = <div className={classes.Cheese}></div>
                break;
            case ('bacon'):
                ingred = <div className={classes.Bacon}></div>
                break;
            case ('salad'):
                ingred = <div className={classes.Salad}></div>
                break;
            default:
                ingred = null;
        }

        return ingred;
    }
}

Ingredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default Ingredients;