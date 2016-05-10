/**
 * Created by Namita Malik on 5/7/16.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RMLL');

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
require('./tenant.controller.js')(app);
require('./house.controller.js')(app);
require('./landlord.controller.js')(app);
app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});