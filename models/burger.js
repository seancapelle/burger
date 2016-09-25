
var orm = require('../config/orm.js');

var burger = {
	all: function(cb) {
		orm.all('burger', function(res){
			cb(res);
		});
	},
	//cols and vals are arrays
	create: function(cols, vals, cb) {
		orm.create('burger', cols, vals, function(res){
			cb(res);
		});
	},

	update: function(objColVals, devoured, cb) {
		orm.update('burger', objColVals, devoured, function(res){
			cb(res);
		});
	}
};

modules.exports = burger;


