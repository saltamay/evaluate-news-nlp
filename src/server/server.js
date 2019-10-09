const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const AYLIENTextAPI = require('aylien_textapi');

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

const textapi = new AYLIENTextAPI({
  application_id: "30e293c0",
  application_key: "2848c8941cc4d6ae426d9239d9a3d522"
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





