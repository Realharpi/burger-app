import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {

    // Here are our ingredients. Which is taken from "BugerBuilder.js" as props.
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )

        // Here we are converting "transformedIngedients" array, so we can check whether the array is full or empty. 
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    // Here we are checking whether the converted transformedIngredients array is empty or not.
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;       // if there are no ingredients, we will output a message.
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}                     {/* Ingredients are added in the middle of breads. */}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;