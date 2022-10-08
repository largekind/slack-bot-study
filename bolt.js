'use strict';
const dotenv = require('dotenv');
const bolt = require('@slack/bolt');
dotenv.config();

console.log(`SLACK_APP_TOKEN: ${process.env.SLACK_APP_TOKEN}`);
console.log(`SLACK_BOT_TOKEN: ${process.env.SLACK_BOT_TOKEN}`);

//slackBot用のapp立ち上げ
const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});
//Botでメッセージを受信したときの処理を記述
app.message(/hello/i, ({message, say}) => { //jsの正規表現で"Hello"(小文字大文字含む)を受けた場合に処理する内容を記載
  say('こんにちは！');
});

//Botの開始
app.start();