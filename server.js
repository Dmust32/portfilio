const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');

const emailer = require('./controllers/emailer')

const app = express();
const port = 5050;
app.use(bodyParser.json());
app.use( cors());

app.post('/email', emailer.sendQuote)

app.listen(port, () => {
  console.log('Listening on port ', port);
});