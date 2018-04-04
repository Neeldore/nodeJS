var express = require('express');
var app = express();
var router = require('./router');

var port = process.env.PORT || 3000;

router(app);
app.listen(port);
console.log(' running on port 3000');