var express = require('express');
var app = express();
var router = require('./router');

var port = 8080;

router(app);
app.listen(port);
console.log(' running on port 3000');