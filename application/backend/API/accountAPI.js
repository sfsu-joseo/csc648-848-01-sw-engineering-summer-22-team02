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
    let password = req.body.password == null || req.body.password == "" ? null : req.body.password;
    let isCreatorAccount = req.body.isCreatorAccount == null || req.body.isCreatorAccount == false ? null : true;
    let termsOfServiceAgreed = req.body.termsOfServiceAgreed == null || req.body.termsOfServiceAgreed == false ? null : true;


    if (termsOfServiceAgreed==true)
    {
    if (name!=null && username!=null && email!=null && password!=null)
    {
      if (email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ))
      {
      if(password.length>=8 && password.length<=20)
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
          res.json("Please adhere to the password requirements")
        }
      }
      else
      {
        res.json("Please enter a valid email");
      }
    }
    else
    {
        res.json("Please fill in all the details");
    }
  }
  else
  {
    res.json("Please accept terms of service");
  }

});

module.exports=accountRouter;