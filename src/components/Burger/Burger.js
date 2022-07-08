import React from "react";
import classes from './Burger.css';
import Ingredients from './Ingredients/Ingredients';

const burger = (props) => {

    // Here are our ingredients. Which is taken from "BugerBuilder.js" as props.
    let transformedIngedients = Object.keys(props.ingreds).map(igKey => {
        return [...Array(props.ingreds[igKey])].map((_, i) => {
            return <Ingredients key={igKey + i} type={igKey} />
        })
    })

    // Here we are converting "transformedIngedients" array, so we can check whether the array is full or empty. 
    .reduce((arr, el) => {
        return arr.concat(el)
    }, [])

    // Here we are checking whether the converted transformedIngredients array is empty or not.
    if (transformedIngedients.length === 0) {
        transformedIngedients = <p>Add ingredients!</p>         // if there are no ingredients, we will output a message.
    }

    console.log(transformedIngedients)

    return (        
        <div className={classes.Burger}>            {/* */}
            <Ingredients type="bread-top" />        {/* This is the top bread. */}
            {transformedIngedients}                 {/* Ingredients are added in the middle of breads. */}
            <Ingredients type="bread-bottom" />     {/* This is the bottom bread. */}
        </div>
    )
}

export default burger;