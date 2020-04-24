import React from 'react';

import './Button.scss';

const Button = ({ disable, isThirdPartySignInButton, children, clickHandler}) => {
    return (
        <div
            className={`button${isThirdPartySignInButton ? ' third-party-sign-in-button' : ''}${disable ? ' disable' : ''}`}
            onClick={clickHandler}>
            {children}
        </div>
    );
}

export default Button;
