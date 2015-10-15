var router = require('express').Router();
var Twitter = require('twitter');
var twitterConfig = require('../../../env/development').TWITTER;
var twitterClient = new Twitter({
  consumer_key: twitterConfig.consumerKey,
  consumer_secret: twitterConfig.consumerSecret,
  access_token_key: twitterConfig.accessToken,
  access_token_secret: twitterConfig.tokenSecret
});
module.exports = router;

router.post('/', function(req, res, next) {
  twitterClient.get('search/tweets', {q: req.body.query}, (error, tweets, response)=>{
    res.json(tweets);
  });
});

router.post('/sendTweet', function(req, res, next) {
  twitterClient.post('statuses/update', {status: req.body.message}, (error, tweet, response)=>{
    console.log(tweet);
  });
});

router.get('/getUser', function(req, res, next) {
  twitterClient.post('statuses/update', {status: req.body.message}, (error, tweet, response)=>{
    console.log(tweet);
  });
});

