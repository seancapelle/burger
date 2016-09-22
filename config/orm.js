var connection = require('../config/connection.js');

function printQuestionMarks(num){
    var arr = [];

    for (var i = 0; i < num; i++){
        arr.push('?');
    }

    return arr.toString();
}

function objToSql(ob){
    arr.push(key + '=' + ob[key]);
}

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
    	 var queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES (' + burgerName + ',' + false + ')';
    	 console.log(queryString)
         connection.query(queryString, function(err, result){
         console.log(result);
         });
    },
    updateOne: function(burgerName){
    	 var queryString = 'UPDATE burgers SET burgerName = ' + burgerName + 'WHERE devoured = true';
         console.log(queryString)
         connection.query(function(err, result){
         console.log(result);
         });
    }
};

module.exports = orm;

