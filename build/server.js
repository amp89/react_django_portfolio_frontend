const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

//put session middleware in here, to easily persist over refreshes.

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(9000);