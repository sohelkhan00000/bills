const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;
app.use(express.static(path.join(__dirname, '/bills-web')))
// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/bills-web/index.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
module.exports = app;