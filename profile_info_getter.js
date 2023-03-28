const Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
});

const params = {screen_name: 'TWITTER_USERNAME'}; // Replace TWITTER_USERNAME with the actual username of the Twitter account you want to fetch information for

client.get('users/show', params, function(error, user, response) {
  if (!error) {
    console.log(user);
  } else {
    console.log(error);
  }
});
