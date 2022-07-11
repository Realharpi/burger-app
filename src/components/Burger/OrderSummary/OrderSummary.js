import React, { Component }from 'react';
import Auxx from '../../../hoc/Auxx';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentDidUpdate() {
        console.log('[OrderSummary] DidUpdate')
    }

    render () {

        const ingredientSummary = Object.keys( this.props.ingredMulti )
        .map( igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredMulti[igKey]}
                </li> );
        } );

        return (
            <Auxx>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout!</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Auxx>
        )
    }
}

export default OrderSummary;