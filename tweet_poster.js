const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
});

const tweet = 'Hello Twitter!'; // Replace with the text of the tweet you want to post

client.post('statuses/update', {status: tweet}, function(error, tweet, response) {
  if (!error) {
    console.log('Tweet posted!');
  } else {
    console.log(error);
  }
});
