import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const publishableKey = 'pk_test_wzIiWW1CUQhtxNHLrmbCGkLd003W4phqdD';

    return (
        <StripeCheckout
            label='Pay Now'
            name='ShopNonStop'
            billingAddress
            shippingAddress
            description={`Total payable amount is $${price}`}
            amount={price}
            panelLabel='Pay Now'
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;