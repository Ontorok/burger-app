import React from 'react';

import backDropCss from './Backdrop.module.css';

const backdrop = (props) => (
    props.show ? <div className={backDropCss.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;