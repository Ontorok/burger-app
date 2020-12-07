import React, { Component } from 'react';

import Aux from '../../../hoc/_Aux/_Aux';
import Backdrop from '../Backdrop/Backdrop';

import modalCss from './Modal.module.css'

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.show !== this.props.show) || (nextProps.children !== this.props.children)
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.closed} />
                <div
                    className={modalCss.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? 1 : 0
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;




// import React from 'react';

// import Aux from '../../../hoc/_Aux';
// import Backdrop from '../Backdrop/Backdrop';

// import modalCss from './Modal.module.css'

// const modal = (props) => (
//     <Aux>
//         <Backdrop show={props.show} clicked={props.closed} />
//         <div
//             className={modalCss.Modal}
//             style={{
//                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//                 opacity: props.show ? 1 : 0
//             }}>
//             {props.children}
//         </div>
//     </Aux>
// );

// export default modal;