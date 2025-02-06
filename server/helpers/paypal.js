// const paypal = require("paypal-rest-sdk");

// paypal.configure({
//   mode: "sandbox",
//   client_id: "AUIF_Nq2K-OyoMxlLH8A2ch3Xn5bpvxG04QJ_1JnWyVFckGG7GCxrDU34PhVatzhuEo8M58zyEJTG-60",
//   client_secret: "EH6Bg18lzZGvP8PAsu25_jqU1jG0xcNphH8WeqpvI9JS5vJwAfvBhphSRz_oEdt6cka1-HtH5slwKvan",
// });

// module.exports = paypal;


// Load environment variables from .env file
require('dotenv').config();

const paypal = require("paypal-rest-sdk");

// Configure PayPal with the environment variables
paypal.configure({
  mode: process.env.PAYPAL_MODE, // either "sandbox" or "live"
  client_id: process.env.PAYPAL_CLIENT_ID, // PayPal client ID
  client_secret: process.env.PAYPAL_SECRET, // PayPal secret
});

module.exports = paypal;
