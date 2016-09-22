var connection = require('./connection.js');

// object relational mapper (ORM)

var orm = {
    //selectAll: function(tableInput, colToSearch, valOfCol) {
    selectAll: function() {
        var queryString = 'SELECT * FROM burgers';
        console.log(queryString);
        connection.query(queryString, function(err, result){
        console.log(result);
        });
    },
    insertOne: function(burgerName) {
    	 var queryString = 'INSERT INTO burgers (burger name, devoured) VALUES (' + burgerName + ',' + 0 + ')';
    	 console.log(queryString)
         connection.query(queryString, function(err, result){
         console.log(result);
         });
    },
    updateOne: function(burgerName){
    	 var queryString = 'UPDATE burgers SET burgerName = ' + burgerName + 'WHERE devoured = 1';
         console.log(queryString)
         connection.query(function(err, result){
         console.log(result);
         });
    }
};

module.exports = orm;

