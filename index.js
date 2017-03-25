const fs = require('fs');
const express = require('express');
const app = express();

const port = process.env['PORT'] = process.env.PORT || 4003;

app.use('/', express.static(__dirname + '/dist'));

app.listen(port, function() { console.log('listening at ', port)});