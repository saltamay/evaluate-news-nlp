const express = require('express');
const app = express();

app.use(express.static('./dist'));

console.log('dirname: ' + __dirname);

app.get('/', (req, res, next) => {
  res.status(200).send('./dist/index.html');
})

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
})


