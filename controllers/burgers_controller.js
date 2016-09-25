var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res){
	res.redirect('/burger')
});

router.get('/burger', function(req, res){
	burger.all(function(data){
		var hbsObject = {burger : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

router.post('/burger/create', function(req, res){
	burger.create(['burger_name', 'devoured'], [req.body.name, req.body.devoured], function(data){
		res.redirect('/burger')
	});
});

router.put('/burger/update/:id', function(req, res){
	var condition = 'id = ' + req.params.id;

	console.log('devoured', devoured);

	burger.update({'devoured' : req.body.devoured}, devoured, function(data){
		res.redirect('/burger');
	});
});

module.exports = router;

// Inside the burgers_controller.js file, import the following:

// express
// method-override
// body-parser
// Create the router for the app, and export the router at the end of your file.

