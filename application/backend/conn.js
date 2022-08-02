const mysql = require('mysql');

const con = mysql.createConnection({
  host: "34.168.15.4",
  user: "root",
  password: "Ks@1234567890",
  database: "YourSportsDB",
  port: "3306"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

});


module.exports=con;