var mysql =require('mysql');

var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "root",
    database : "testmanga",
    // port : "3307"
  });

module.exports = connection;