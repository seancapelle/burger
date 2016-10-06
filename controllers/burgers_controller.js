//Functions for routing and the logic for each route

var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res){
	res.redirect('/burgers')
});

router.get('/burgers', function(req, res){
	burger.all(function(data){
		var hbsObject = {burger : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req, res){
	burger.create(['burger_name', 'devoured'], [req.body.name, req.body.devoured], function(data){
		res.redirect('/burgers')
	});
});

router.put('/burgers/update/:id', function(req, res){
	var condition = 'id = ' + req.params.id;

	console.log('devoured', devoured);

	burger.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;

