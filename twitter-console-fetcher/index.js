/* eslint-disable camelcase */
'use strict';

const Twitter = require('twitter');
require('colors');
require('dotenv').config();

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

const formatDate = date => new Date(date).toUTCString();
const parseLimit = str => str.match(/\d+/)[0];

const parseTweet = (tweet, index) => {
  const { created_at, text, user } = tweet;
  const { screen_name, name, location } = user;

  const username = `@${screen_name}`;
  const from = location ? `from ${location}` : '';

  console.log(`${index + 1})========================================`);
  console.log(formatDate(created_at).yellow);
  console.log(`${username.blue} | ${name.bold} ${from}`);
  console.log(text);
  console.log(`========================================${index + 1})\n`);
};

const username = process.argv[2];
const limit = process.argv[3] ? parseLimit(process.argv[3]) : 1;

const params = {
  screen_name: username,
  count: limit,
  exclude_replies: false,
};

client.get('statuses/user_timeline', params, (err, tweets) => {
  if (err) throw new Error(err.message);

  console.log(`Total tweets: ${params.count}`.green);
  tweets.map((tweet, i) => parseTweet(tweet, i));
});
