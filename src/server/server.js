const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const AYLIENTextAPI = require('aylien_textapi');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('./dist'));

app.get('/', (req, res, next) => {
  res.status(200).send('./dist/index.html');
})

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}!`);
})

// Set up Aylien SDK
const api_id = process.env.API_ID;
const api_key = process.env.API_KEY;

const textapi = new AYLIENTextAPI({
  application_id: api_id,
  application_key: api_key
});


app.post('/sentiment', (req, res, next) => {
  if(req.body.text !== " ") {
    const text = req.body.text;
    textapi.sentiment({
      'text': text
    }, function (error, response) {
      if (error === null) {
        res.status(201).send(response);
      }
    });
  } else {
    res.status(400).json('Bad Request');
  }
})





