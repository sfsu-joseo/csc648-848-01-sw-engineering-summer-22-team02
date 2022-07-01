const express = require("express");
const con = require("../conn");

const searchNewsRouter = express.Router();

searchNewsRouter.get("/search", (req, res) => {
    let date = req.body.date;
    let sport = req.body.sport;
    let query = "";

    if (date!=null && sport!=null)
    {
        query = 'SELECT image_URL,heading,subHeading,posttime,name as `Author`,sport FROM (SELECT image_URL,heading,subHeading,fk_authorid,posttime,sport FROM Article WHERE sport = "'+sport+'" AND posttime >= "'+date+'") AS Articles JOIN RegisteredUser ON user_id = Articles.fk_authorid ORDER BY posttime DESC;';
    }
    else if (date!=null)
    {
        query = 'SELECT image_URL,heading,subHeading,posttime,name as `Author`,sport FROM (SELECT image_URL,heading,subHeading,fk_authorid,posttime,sport FROM Article WHERE posttime >= "'+date+'") AS Articles JOIN RegisteredUser ON user_id = Articles.fk_authorid ORDER BY posttime DESC;'
    }
    else if(sport!=null)
    {
        query = 'SELECT image_URL,heading,subHeading,posttime,name as `Author`,sport FROM (SELECT image_URL,heading,subHeading,fk_authorid,posttime,sport FROM Article WHERE sport = "'+sport+'") AS Articles JOIN RegisteredUser ON user_id = Articles.fk_authorid ORDER BY posttime DESC;'
    }
    else{

        query = 'SELECT image_URL,heading,subHeading,posttime,name as `Author`,sport FROM Article JOIN RegisteredUser ON user_id = Article.fk_authorid ORDER BY posttime DESC;'
    }

    con.query(query, (error, results, fields) => {
        if (error) {
          res.json(error);
        }
        let newResults=results.map(result=>{
            let newDate= new Date(result.posttime)
            result.posttime = newDate.getFullYear().toString()+'-'+(newDate.getMonth()+1).toString()+'-'+newDate.getDate().toString();
            return result;
        })
        res.json(newResults)
      });
  
  });

module.exports=searchNewsRouter;