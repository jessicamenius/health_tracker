// const twilio = require("twilio");

// // Find your account sid and auth token in your Twilio account Console.
// let client = new twilio("TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN");

// // Send the text message.
// client.messages.create({
//   to: "+13145178505",
//   from: "YOUR_TWILIO_NUMBER",
//   body: "Hello from Twilio!",
// });

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = "ACdda9c9ed92ef5b4af2d599de5a613084";
const authToken = "05354e33ad62b61646a6f1f2703f5b63";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Testing this!",
    from: "+14155239159",
    to: "+13145178505",
  })
  .then((message) => console.log(message.sid));
