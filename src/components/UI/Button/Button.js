import React from 'react';

import './Button.scss';

const Button = ({ disable, isThirdPartySignInButton, children, clickHandler, ...elementProps }) => {
    return (
        <div
            className={`button ${isThirdPartySignInButton ? 'third-party-sign-in-button' : ''} ${disable ? 'disable' : ''}`}
            {...elementProps}
            onClick={clickHandler}>
            {children}
        </div>
    );
}

export default Button;
