//Dependancies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//Express configuration
var app = express();
var PORT = 3000;

//Body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
