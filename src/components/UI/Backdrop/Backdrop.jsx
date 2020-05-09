import React from 'react';

import './Backdrop.scss';

const backdrop = props => (
    props.show ? <div className="Backdrop" onClick={props.backdropClicked}></div> : null
);

export default backdrop;