var express = require('express');
var lessMiddleware = require('less-middleware');

var app = express();
var serverConfig = require('./config/server.json');

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use(lessMiddleware(__dirname + '/styles'));
app.use(express.static(__dirname + '/styles'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/pdf'));
app.use(express.static(__dirname + '/fonts'));

app.get('/', function (req, res) {
  res.render('index');
});

var server = app.listen(serverConfig.port, function () {
  console.log('server running at http://localhost:' + server.address().port);
});