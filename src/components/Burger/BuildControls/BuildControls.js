import React from 'react';

import BuildControl from './BuildControl/BuildControl'
import buildControlsCss from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => {
    return (
        <div className={buildControlsCss.BuildControls}>
            <p>Total Price : {props.totalPrice}</p>
            {controls.map(control => (
                <BuildControl
                    key={control.label}
                    label={control.label}
                    added={() => props.ingredientAdded(control.type)}
                    removed={() => props.ingredientRemoved(control.type)}
                    disabled={props.disabled[control.type]} />
            ))}
            <button className={buildControlsCss.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
        </div>);

};

export default buildControls;
