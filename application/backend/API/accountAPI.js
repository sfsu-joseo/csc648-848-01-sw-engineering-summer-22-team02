const express = require("express");
const { query } = require("../conn");
const con = require("../conn");
var nodemailer = require('nodemailer');

const accountRouter = express.Router();

accountRouter.post("/signup",(req,res)=>{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    let name = req.body.name == null || req.body.name.trim() == "" ? 'NULL' : '"'+req.body.name.trim().toLowerCase()+'"';
    let username = req.body.username == null || req.body.username.trim() == "" ? 'NULL' : '"'+req.body.username.trim().toLowerCase()+'"';
    let email = req.body.email == null || req.body.email.trim() == "" ? 'NULL' : '"'+req.body.email.trim().toLowerCase()+'"';
    let password = req.body.password == null || req.body.password == "" ? 'NULL' : '"'+req.body.password+'"';
    let isCreatorAccount = req.body.isCreatorAccount == null || req.body.isCreatorAccount == false ? '0' : '1';
    let termsOfServiceAgreed = req.body.termsOfServiceAgreed == null || req.body.termsOfServiceAgreed == false ? 'NULL' : true;

    if (termsOfServiceAgreed==true)
    {
    if (name!=null && username!=null && email!=null && password!=null)
    {
      if(password.length>=8 && password.length<=20)
      {

        let queryOne= 'CALL CheckAccountByUsername('+username+');';

        con.query(queryOne,(error, results, fields)=>{
          if (error) {
            res.json(error);
          }
          let count=results[0][0]['COUNT(*)'];
          if (count==0)
          {
            let queryTwo= 'CALL CheckAccountByEmail('+email+');';

            con.query(queryTwo,(error, results, fields)=>{
              if (error) {
                res.json(error);
              }
              count=results[0][0]['COUNT(*)'];

              if (count==0)
              {
                let secondQuery = 'CALL InsertAccount('+name+','+username+','+email+',MD5('+password+'),'+isCreatorAccount+');';
                con.query(secondQuery, (error, results, fields) => {
                    if (error) {
                      res.json(error);
                    }
                    res.json("Account Created Succesfully");
                  });
              }
              else
              {
                res.json("Email Already exists");
              }

            })
          }
          else
          {
            res.json("Username already exists");
          }
        })
        }
        else
        {
          res.json("Please adhere to the password requirements")
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

accountRouter.post("/login",(req,res)=>{
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  let username = req.body.username == null || req.body.username.trim() == "" ? 'NULL' : '"'+req.body.username.trim().toLowerCase()+'"';
  let password = req.body.password == null || req.body.password == "" ? 'NULL' : '"'+req.body.password+'"';

  let query = 'CALL GetAccountByUsernameOrEmail('+username+','+username+',MD5('+password+'));';

  con.query(query, (error, results, fields) => {
    if (error) {
      res.json(error);
    }
    count = results[0].length;
    if (count==1){
      let account = results[0][0];
      res.json(
        {
          "account_id" : account.Account_ID,
          "username": account.Username,
          "name": account.Name,
          "email": account.Email,
          "isCreator": account.isCreator
        }
      )
    }
    else
    {
      res.json("Accout does not exist! Please check your username, email and password");
    }

  });
    

});

accountRouter.post("/deleteAccount",(req,res)=>{
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  let accountID= req.body.accountID == null || req.body.accountID.trim() == "" ? 'NULL' : '"'+req.body.accountID.trim().toLowerCase()+'"';

  if (accountID!='NULL')
  {

  let query = 'CALL DeleteAccountByAccountID('+accountID+');';

  con.query(query, (error, results, fields) => {
    if (error) {
      res.json(error);
    }

    res.json("Account Deleted Succesfully");

  });
}   
else
{
  res.json("Please login before trying to delete account");
}

});

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kshitizsareen709@gmail.com',
    pass: 'hyloetjuagxzznyi'
  }
});

accountRouter.post("/sendOTP",(req,res)=>{
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  let OTP= req.body.OTP == null || req.body.OTP.trim() == "" ? 'NULL' : '"'+req.body.OTP.trim().toLowerCase()+'"';
  let email = req.body.email == null || req.body.email.trim() == "" ? 'NULL' : '"'+req.body.email.trim().toLowerCase()+'"';
  if(email=='NULL')
  {
    res.json("Please enter your email");
  }
  else
  {
    
    var mailOptions = {
      from: 'kshitizsareen709@gmail.com',
      to: email,
      subject: 'Password Reset OTP',
      text: 'Your OTP is '+OTP
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        res.json('Email sent: ' + info.response);
      }
    });
  }
})

accountRouter.post("/resetPassword",(req,res)=>{
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  let confirmPassword =  req.body.OTP == null || req.body.OTP.trim() == "" ? 'NULL' : '"'+req.body.OTP.trim().toLowerCase()+'"';
  let password = req.body.email == null || req.body.email.trim() == "" ? 'NULL' : '"'+req.body.email.trim().toLowerCase()+'"';

  

})



module.exports=accountRouter;