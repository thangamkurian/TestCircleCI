// Sample node.js web app for Pluralsight Docker CI course
// For demonstration purposes only
'use strict';

var port = process.env.PORT || 5003;

var express = require('express'),
    app = express();

app.set('views', 'views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.render('home', {
  });
});

app.listen(port, function(err){
    console.log('server started on port 8080');
});
module.exports.getApp = app;
