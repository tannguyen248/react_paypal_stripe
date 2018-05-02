import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import StripeCheckout from 'react-stripe-checkout';

import './App.css';

class App extends Component {
  render() {
    const onSuccess = (payment) => {
      alert('The payment was succeeded!');
    }

    const onCancel = (data) => {
      alert('The payment was cancelled!');
    }

    const onError = (err) => {
      alert('Error!');
    }

    let env = 'sandbox';
    let currency = 'USD';
    let total = 10;

    const client = {
      sandbox:    'Aby3tnk18xMZLwUnOlPvtXkpUfI7QEmxDknzwNZyO88uW54-FTJzKZaoElBePQKtSA31toHMlvixjK-9',
      production: 'YOUR-PRODUCTION-APP-ID',
    }

    let token = null;
    const onToken = (result) => {
      token = result;
      alert(`We are in business, ${token.email}`);
    }

    return (
      <div>
        <PaypalExpressBtn
          env={env} client={client}
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
        />

        <StripeCheckout
          token={onToken}
          stripeKey='pk_test_Y8gnpBsGe3DGSUAGIeTpKAe3'
          name='The Company name'
          description='The project description'
          amount={1000000}
          currency='USD'
          email="tansworkingspace@gmail.com"
        />
    </div>
    );
  }
}

export default App;
