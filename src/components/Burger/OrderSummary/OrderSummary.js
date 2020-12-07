// import React, { Component } from 'react';

// import Aux from '../../../hoc/_Aux';
// import Button from '../../UI/Button/Button'

// class OrderSummary extends Component {
//     componentDidUpdate() {
//         console.log('OrderSummary : componentDidUpdate');
//     }
//     render() {
//         const ingredientSummary = Object.keys(this.props.ingredients)
//             .map(igKey => {
//                 return (
//                     <li key={igKey}>
//                         <span style={{ textTransform: "capitalize" }}>{igKey}</span>  : {this.props.ingredients[igKey]}
//                     </li>
//                 );
//             });
//         return (
//             <Aux>
//                 <h3>Your Order</h3>
//                 <p>A delicious Burger with the following ingredients: </p>
//                 <ul>
//                     {ingredientSummary}
//                 </ul>
//                 <p>Total Price : <strong>{this.props.totalPrice}</strong> </p>
//                 <p>Continue to Checkout?</p>
//                 <Button btnType='Danger' clicked={this.props.purchaseCancled}>CANCEL</Button>
//                 <Button btnType='Success' clicked={this.props.purchaseContinued}> CONTINUE</Button>
//             </Aux>
//         );
//     }
// }

// export default OrderSummary











import React from 'react';

import Aux from '../../../hoc/_Aux/_Aux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: "capitalize" }}>{igKey}</span>  : {props.ingredients[igKey]}
                </li>
            );
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious Burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price : <strong>{props.totalPrice}</strong> </p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}> CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary