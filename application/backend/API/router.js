const { default: axios } = require("axios");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.json("Test Connection");
  
  });

  router.get("/testpostrequest",(req,res)=>{
    axios.get("http://34.136.124.189:8080/api/searchnews/search",{
      data:{
        "date": "2022-06-14"
      }
    }).then(axiosres=>{
      res.json(axiosres.data);
      
    })
  })

  module.exports=router;