import React, { Component } from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import StripeCheckout from 'react-stripe-checkout';

import './App.css';

class App extends Component {
  render() {
    const onSuccess = () => {
      alert('The payment was succeeded!');
    }

    const onCancel = () => {
      alert('The payment was cancelled!');
    }

    const onError = () => {
      alert('Error!');
    }

    let env = 'sandbox';
    let currency = 'USD';
    let total = 10;

    const client = {
      sandbox:    'Aby3tnk18xMZLwUnOlPvtXkpUfI7QEmxDknzwNZyO88uW54-FTJzKZaoElBePQKtSA31toHMlvixjK-9',
      production: 'YOUR-PRODUCTION-APP-ID',
    }

    const onToken = (token) => {
      fetch('/api/charge', {
        method: 'POST',
        body: JSON.stringify({ id: token.id, email : token.email }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(res => {
        if (res.status === 200) {
          onSuccess();
        } else {
          onError()
        }
      });
    }

    return (
      <div>
        <div>
          <h4>The paypal account:</h4>
          <p>email: buyer9876@gmail.com</p>
          <p>password: 12345678</p>
          <PaypalExpressBtn
            env={env} client={client}
            currency={currency}
            total={total}
            onError={onError}
            onSuccess={onSuccess}
            onCancel={onCancel}
          />
        </div>
        <div>
          <h4>The stripe card:</h4>
          <p>4242424242424242	Visa</p>
          <div><a href='https://stripe.com/docs/testing#cards'>See more</a></div>
          <StripeCheckout
            token={onToken}
            stripeKey='pk_test_Y8gnpBsGe3DGSUAGIeTpKAe3'
            name='The Company name'
            description='The project description'
            amount={1000}
            currency='USD'
            email='useremail@email.com'
          />
        </div>
      </div>
    );
  }
}

export default App;
