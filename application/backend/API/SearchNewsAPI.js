const express = require("express");
const con = require("../conn");

const searchNewsRouter = express.Router();

searchNewsRouter.post("/search", (req, res) => {

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');


    let date = req.body.date == null || req.body.date == ""  ? 'NULL' : '"'+req.body.date.trim().toLowerCase()+'"';
    let sport = req.body.sport == null  || req.body.sport == ""  ? 'NULL' : '"'+req.body.sport.trim().toLowerCase()+'"';
    let searchText =  req.body.searchText == null || req.body.searchText == ""  ? 'NULL' : '"'+req.body.searchText.trim().toLowerCase()+'"';
    let query = 'CALL GetNewsArticles('+date+','+sport+','+searchText+');';



    con.query(query, (error, results, fields) => {
        if (error) {
          res.json(error);
        }
        res.json(results[0]);
      });
  });

module.exports=searchNewsRouter;