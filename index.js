const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('la team JUUUL');
});

app.listen(3000);
