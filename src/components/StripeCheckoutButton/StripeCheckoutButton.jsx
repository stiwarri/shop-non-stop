import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import AppLogo from '../../assets/images/logo.png';

const StripeCheckoutButton = ({ price }) => {
    const publishableKey = 'pk_test_wzIiWW1CUQhtxNHLrmbCGkLd003W4phqdD';
    const onToken = (token, address) => {

    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='ShopNonStop'
            image={AppLogo}
            billingAddress
            shippingAddress
            description={`Total payable amount is $${price}`}
            amount={price}
            panelLabel='Pay Now'
            stripeKey={publishableKey}
            token={onToken}
        />
    );
};

export default StripeCheckoutButton;