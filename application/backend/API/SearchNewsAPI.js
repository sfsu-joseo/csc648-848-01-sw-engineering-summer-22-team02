const express = require("express");
const con = require("../conn");

const searchNewsRouter = express.Router();

searchNewsRouter.post("/search", (req, res) => {

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');


    let date = req.body.date == "" || req.body.date == null ? 'NULL' : '"'+req.body.date.trim().toLowerCase()+'"';
    let sport = req.body.sport == "" || req.body.sport == null ? 'NULL' : '"'+req.body.sport.trim().toLowerCase()+'"';
    let searchText = req.body.searchText == "" || req.body.searchText == null ? 'NULL' : '"'+req.body.searchText.trim().toLowerCase()+'"';
    let query = 'CALL getNewsArticles('+date+','+sport+','+searchText+');';



    con.query(query, (error, results, fields) => {
        if (error) {
          res.json(error);
        }
        let newResults=results[0].map(result=>{
            let newDate= new Date(result.posttime)
            result.posttime = newDate.getFullYear().toString()+'-'+(newDate.getMonth()+1).toString()+'-'+newDate.getDate().toString();
            return result;
        })
        res.json(newResults)
      });
  });

module.exports=searchNewsRouter;