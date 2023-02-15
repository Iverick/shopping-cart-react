# README

Minimalistic shopping cart example integrated with the Stripe payment checkout API.

### Run it on your local machine

Server app located in the main directory and frontend is in the `\store` folder.

To run this app do the following:

- Create `.env` file inside the root folder and add there following keys.

`PORT = 4000`

`STRIPE_SECRET = '<%== your_stripe_api_secret_key ==>'`

- Execute the following commands for the server and frontend to run the application.

`yarn install`

`yarn start`
