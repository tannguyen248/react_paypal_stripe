I. GET Paypal ID
1/ Create account at https://www.paypal.com
2/ Login to the above account
3/ Navigate to https://developer.paypal.com/developer/applications/
4/ Scroll down to REST API Apps and click the name of your app to see the app's details. If you don't have any apps, create one now:
	a. Click Create App.
	b. In App Name, enter a name and then click Create App again. The app is created and your client ID is displayed.
5/ Click the Sandbox / Live toggle to display and copy the client ID for each environment.
6/ Copy the Client ID to PaypalCheckOutButton.js in the project.
7/ Create your test account (sandbox account)
	a.Log in to the Developer site at https://developer.paypal.com. On the Dashboard tab, navigate to Sandbox > Accounts.
	b.Click Create Account and populate the fields
	c.Click Create Account

This is full PayPal Express Checkout document: https://developer.paypal.com/docs/integration/direct/express-checkout/integration-jsv4/client-side-REST-integration/


II. GET Stripe API
1/ Create account at https://dashboard.stripe.com/register
2/ Login to the above account
3/ Get stripeKey
	a. Navigate to https://dashboard.stripe.com/account/apikeys
	b. Copy Publishable key's value then Paste to stripeKey field at StripeCheckOutButton.js
	c. Copy the Secret key's value to server.js