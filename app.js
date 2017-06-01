var express = require('express'),
    app = express(),
    http = require('http'),
    path = require('path'),
    html_dir = path.join(__dirname, 'public', 'views');

app.set(express.static(path.join(__dirname, 'public')));
app.use("/css",  express.static(__dirname + '/public/css'));
app.use("/javascript", express.static(__dirname + '/public/javascript'));
app.use("/images",  express.static(__dirname + '/public/images'));
app.use("/fonts",  express.static(__dirname + '/public/fonts'));

app.get('/', function(request, response){
  response.sendFile(html_dir + '/index.html');
});

module.exports = app;
