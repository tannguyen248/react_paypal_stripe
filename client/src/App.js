import React, { Component } from 'react';
import PaypalCheckOutButton from './components/PaypalCheckOutButton';
import StripeCheckOutButton from './components/StripeCheckOutButton';

class App extends Component {
  render() {
    let currency = 'USD';
    let total = 10;

    const onSuccess = () => {
      alert('The payment was succeeded!');
    }

    const onCancel = () => {
      alert('The payment was cancelled!');
    }

    const onError = () => {
      alert('Error!');
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
        <PaypalCheckOutButton
          currency={currency}
          total={total}
          onError={onError}
          onSuccess={onSuccess}
          onCancel={onCancel}
        />
        <StripeCheckOutButton
          currency={currency}
          amount={total * 100}
          onToken={onToken}
        />
      </div>
    );
  }
}

export default App;
