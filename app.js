var express = require('express');
var logger = require('morgan');
var path = require('path');
var fs = require('fs');
var exphbs  = require('express-handlebars');
var api = require('./server/api');
var app = express();


var SERVER = path.join(__dirname, 'server')

var hbsConfig = exphbs({
  defaultLayout:  path.join(__dirname, '/server/views/layout/main')
});

app.set('views', path.join(__dirname,'/server/views'));
app.engine('handlebars', hbsConfig);
app.set('view engine', 'handlebars');

app.use(logger('dev'));

app.use('/', express.static(path.join(SERVER, 'public')));
app.use('/api', api);

app.get('/server-render', (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'server/data/nav.json'))
  )
  res.render('home', data);
})

module.exports = app;
