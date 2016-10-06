//Dependancies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

//Express configuration
var app = express();
var PORT = 3000;

//Body parser setup
app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('method'))
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

//Listener
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});




	