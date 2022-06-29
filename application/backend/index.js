

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

query= `SELECT * FROM RegisteredUser`;
con.query(query, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});


const express = require("express");
const router = require('./API/router');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/",router);

app.listen(8080, () => console.log('Server Begins'));