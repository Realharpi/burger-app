import React, { Component } from 'react';
import Auxx from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    
    // Here are our ingredients. 
    state = {
        ingredMulti: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        isReady: false,                     // Whether the burger has ingredients or not.
        checkingOut: false                  // Whether the customer is checking out.
    }

    updatePurchaseState (ingredMulti) {
        const sum = Object.keys( ingredMulti )
            .map( igKey => {
                return ingredMulti[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { isReady: sum > 0 } );
    }

    // Add ingredients to the burger.
    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredMulti[type];
        const updatedCount = oldCount + 1;
        const updatedIngredMulti = {
            ...this.state.ingredMulti
        };
        updatedIngredMulti[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredMulti: updatedIngredMulti } );
        this.updatePurchaseState(updatedIngredMulti);
    }


    // Remove ingredients from the burger.
    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredMulti[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredMulti = {
            ...this.state.ingredMulti
        };
        updatedIngredMulti[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, ingredMulti: updatedIngredMulti } );
        this.updatePurchaseState(updatedIngredMulti);
    }

    // Customer is going to purchase the burger - When this function is called.
    purchaseHandler = () => {
        this.setState({checkingOut: true});
    }

    // Cancel the checkout process - When this function is called.
    purchaseCancelHandler = () => {
        this.setState({checkingOut: false});
    }

    // Continue to checkout  - When this function is called.
    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    render () {

        // Disabling the button.
        const disabledInfo = {
            ...this.state.ingredMulti
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0      // disabledInfo[key] is the count of the ingredients. Like how many cheese or salad.
        }

        return (
            <Auxx>
                <Modal show={this.state.checkingOut} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredMulti={this.state.ingredMulti}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredMulti={this.state.ingredMulti} />             {/* We are giving the ingredients as props here. */}
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}             // We are passing "addIngredientHandler" as a prop to child "BuilderControls".
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}                                 // Disable button
                    isReady={this.state.isReady}                            // We can check whether the burger ready to buy.
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}                           // Price Added
                />
            </Auxx>
        );
    }
}

export default BurgerBuilder;