const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send();
})

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})


