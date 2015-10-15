'use strict';
var router = require('express').Router();
var twilio = require('twilio');
var twilioConfig = require('../../../env/development').TWILIO;
var client = new twilio.RestClient(twilioConfig.TWILIO_ACCOUNT_SID, twilioConfig.TWILIO_AUTH_TOKEN);
module.exports = router;

router.post('/sendText', function(req, res) {
  req.body.to = twilioConfig.MY_NUMBER;
  req.body.from = twilioConfig.TWILIO_NUMBER;
  client.messages.create(req.body,
    function(error, message) {
      if (!error) {
        // The second argument to the callback wigit ll contain the information
        // sent back by Twilio for the request. In this case, it is the
        // information about the text messsage you just sent:
        console.log('Success! The SID for this SMS message is:');
        console.log(message.sid);

        console.log('Message sent on:');
        console.log(message.dateCreated);
        res.send(message);
      } else {
        console.log('Oops! There was an error.', error);
      }
    });
});

router.post('/sendCall', function(req, res) {
  req.body.to = '+17186837332';
  req.body.from = twilioConfig.TWILIO_NUMBER;
  client.calls.create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: req.body.to,
    from: req.body.from
  }, function(error, call) {
    if (!error) {
      // The second argument to the callback will contain the information
      // sent back by Twilio for the request. In this case, it is the
      // information about the call you just sent:
      console.log('Success! The SID for this Call is:');
      console.log(call.sid);

      console.log('Call sent on:');
      console.log(call.dateCreated);
      res.send(call);
    } else {
      console.log('Oops! There was an error.', error);
    }
  });
});
