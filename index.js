const mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'KakirthrA81',
  database:'today'
});

connection.connect(function(err){
  if(err) throw err;
  console.log('connected');
})

connection.end();