const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

    res.json("Test Connection Again");
  
  });

  module.exports=router;