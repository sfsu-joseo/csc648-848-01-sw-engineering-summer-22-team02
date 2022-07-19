const express = require("express");
const con = require("../conn");

const accountRouter = express.Router();

accountRouter.post("/signup",(req,res)=>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    let name = req.body.name == null || req.body.name == "" ? null : req.body.name.trim().toLowerCase();
    let username = req.body.username == null || req.body.username == "" ? null : req.body.username.trim().toLowerCase();
    let email = req.body.email == null || req.body.email == "" ? null : req.body.email.trim().toLowerCase();
    let password = req.body.password == null || req.body.password == "" ? null : req.body.password.trim().toLowerCase();

    if (name!=null && username!=null && email!=null && password!=null)
    {
        query = 'INSERT INTO RegisteredUser (name,username,email,password) VALUES ("'+name+'","'+username+'","'+email+'",MD5("'+password+'"));';
        con.query(query, (error, results, fields) => {
            if (error) {
              res.json(error);
            }
            res.json("Account Created Succesfully");
          });
    }
    else
    {
        res.json("Please fill in all the details");
    }

});

module.exports=accountRouter;