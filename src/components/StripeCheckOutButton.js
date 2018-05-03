import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = (props) => {
  return (
    <div>
      <h4>The stripe card:</h4>
      <p>4242424242424242	Visa</p>
      <div><a href='https://stripe.com/docs/testing#cards'>See more</a></div>
      <StripeCheckout
        token={props.onToken}
        stripeKey='pk_test_Y8gnpBsGe3DGSUAGIeTpKAe3'
        name='The Company name'
        description='The project description'
        amount={props.amount}
        currency={props.currency}
        email='useremail@email.com'
      />
    </div>
  );
}

export default StripeCheckOutButton;
