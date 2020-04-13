import React from 'react';

import './Button.scss';

const Button = ({ isThirdPartySignInButton, children, clickHandler, ...elementProps }) => {
    return (
        <div className={`button ${isThirdPartySignInButton ? 'third-party-sign-in-button' : ''}`} {...elementProps} onClick={clickHandler}>
            {children}
        </div>
    );
}

export default Button;
