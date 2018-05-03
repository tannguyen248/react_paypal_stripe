const express = require('express');
const bodyParser = require("body-parser");

// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require("stripe")("sk_test_yvH6yFRd3XFD4gzE0giBAno3");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const stripeRespondHandler = res => (error, success) => {
    if (error) {
      res.status(500).send({ error: error });
    } else {
      res.status(200).send({ success: success });
    }
  }

app.post('/api/charge', (req, res) => {
    const token = req.body;
    console.log(token);
    const charge = stripe.charges.create({
        amount: 1000,
        currency: 'usd',
        description: token.email,
        source: token.id,
    }, stripeRespondHandler(res));
});

app.listen(port, () => console.log(`Server is on port ${port}`));
