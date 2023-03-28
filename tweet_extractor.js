const Twitter = require('twitter');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const client = new Twitter({
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
});

const screenName = 'TWITTER_USERNAME'; // Replace TWITTER_USERNAME with the actual username of the Twitter account you want to fetch tweets for

const writer = csvWriter();
writer.pipe(fs.createWriteStream('tweets.csv'));

const params = {screen_name: screenName, count: 200}; // you can increase count to fetch more tweets

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    tweets.forEach(function(tweet) {
      writer.write({created_at: tweet.created_at, text: tweet.text}); // you can add more fields as needed
    });
    writer.end();
    console.log('Tweets saved to tweets.csv');
  } else {
    console.log(error);
  }
});
