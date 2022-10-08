'use strict';
const dotenv = require('dotenv');
dotenv.config();

console.log(`SLACK_APP_TOKEN: ${process.env.SLACK_APP_TOKEN}`);
console.log(`SLACK_BOT_TOKEN: ${process.env.SLACK_BOT_TOKEN}`);