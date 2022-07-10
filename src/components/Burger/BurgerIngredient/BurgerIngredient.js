import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render () {
        let ingredSing = null;

        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredSing = <div className={classes.BreadBottom}></div>;
                break;
            case ( 'bread-top' ):
                ingredSing = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case ( 'meat' ):
                ingredSing = <div className={classes.Meat}></div>;
                break;
            case ( 'cheese' ):
                ingredSing = <div className={classes.Cheese}></div>;
                break;
            case ( 'bacon' ):
                ingredSing = <div className={classes.Bacon}></div>;
                break;
            case ( 'salad' ):
                ingredSing = <div className={classes.Salad}></div>;
                break;
            default:
                ingredSing = null;
        }

        return ingredSing;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;