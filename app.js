var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose =  require('mongoose');

// Connect to mongoose
mongoose.connect('mongodb://admin:poi098@ds223019.mlab.com:23019/dancingliondb');
var db = mongoose.connection;

//this is a http request
app.get('/', function(req, res){
  res.send('Use /api/P');
});

app.listen(3000);
console.log('We are coneccted to port 3000');
