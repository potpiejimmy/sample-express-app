/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var config = require('./config');
var principalAPI = require('./routes/principalAPI');

var app = express();
app.use(bodyParser.json());

mongoose.connect(config.db.url, function (err) {
    if(err) {
        console.log('Connection error', err);
    } else {
        console.log('Successfully connected to ' + config.db.url);
        console.log('Opening route /rest');
        //app.use(express.static('../sample-angular2-app'));
        app.use('/rest', principalAPI);
    }
});

app.listen(3000, function () {
  console.log('Startup complete. Listening on port 3000.');
});
