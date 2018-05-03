import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

const PaypalCheckOutButton = (props) => {
  const client = {
    sandbox:    'Aby3tnk18xMZLwUnOlPvtXkpUfI7QEmxDknzwNZyO88uW54-FTJzKZaoElBePQKtSA31toHMlvixjK-9',
    production: 'YOUR-PRODUCTION-APP-ID'
  };

  return (
    <div>
      <h4>The paypal account:</h4>
      <p>email: buyer9876@gmail.com</p>
      <p>password: 12345678</p>
      <PaypalExpressBtn
        client={client}
        currency={props.currency}
        total={props.total}
        onError={props.onError}
        onSuccess={props.onSuccess}
        onCancel={props.onCancel}
      />
    </div>
  );
}

export default PaypalCheckOutButton;
