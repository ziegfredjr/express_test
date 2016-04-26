var express = require("express");
var bodyParser = require('body-parser');

//instantiate express
var app = express();
//set
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//middleware
app.use(bodyParser());
app.use(express.static(__dirname + '/bower_components'));

//define routes
app.use(require('./todos'));

var port = process.env.PORT || 8080;
app.listen(port, function() {
	console.log('ready on port ' + port);
});