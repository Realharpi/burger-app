import React, { Component } from 'react';

import Auxx from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const Ingredient_prices = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    
    // Here are our ingredients. 
    state = {
        ingreds: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        
        totalPrice: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingreds[type]
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingreds
        }
        updatedIngredients[type] = updatedCount
        const priceAddition = Ingredient_prices[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({totalPrice: newPrice, ingreds: updatedIngredients})
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingreds[type]
        if (oldCount <= 0) {
            return 
        }
        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingreds
        }
        updatedIngredients[type] = updatedCount
        const priceDeduction = Ingredient_prices[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceDeduction
        this.setState({totalPrice: newPrice, ingreds: updatedIngredients})
    }

    render () {
        // Disabling the button.
        const disabledInfo = {
            ...this.state.ingreds
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0      // disabledInfo[key] is the count of the ingredients. Like how many cheese or salad.
        }

        return (
            <Auxx>
                <Burger ingreds={this.state.ingreds}/>                      {/* We are giving the ingredients as props here. */}
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}             // We are passing "addIngredientHandler" as a prop to child "BuilderControls".
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo} />                               {/* Diabled button*/}
            </Auxx>
        );
    }
}

export default BurgerBuilder;