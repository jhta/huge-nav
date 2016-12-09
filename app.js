var express = require('express');
var logger = require('morgan');
var path = require('path');
var api = require('./server/api');
var app = express();
var SERVER = path.join(__dirname, 'server')
app.use(logger('dev'));
app.use(express.static(path.join(SERVER, 'public')));
app.use('/api', api);

module.exports = app;
