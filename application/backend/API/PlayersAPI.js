const express = require("express");
const { query } = require("../conn");
const con = require("../conn");

const playersRouter = express.Router();


playersRouter.post('/getPlayer',(req,res)=>{

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');


    let playerID = req.body.playerID == null || req.body.playerID.trim() == "" ? 'NULL' : '"'+ req.body.playerID.trim().toLowerCase()+'"';
    let sport = req.body.sport == null  || req.body.sport.trim() == "" ? 'NULL' : req.body.sport.trim().toLowerCase();

    if(sport=="basketball")
    {
        sport='0';
    }
    else if (sport=="baseball")
    {
     sport= '1';
    }

    let query = 'CALL GetPlayers('+playerID+','+sport+');';

    con.query(query,(error, results, fields)=>{
        if(error){
            res.json(error);
        }
        res.json(results[0][0]);
    })
    
})

playersRouter.post('/searchPlayer',(req,res)=>{

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    let player = req.body.player == "" || req.body.player == null ? 'NULL' : '"'+req.body.player.trim().toLowerCase()+'"';
    let playerType = req.body.playerType == "" || req.body.playerType == null ? 'NULL' : req.body.playerType.trim().toLowerCase();
    if(playerType=="basketball")
    {
        playerType='0';
    }
    else if (playerType=="baseball")
    {
        playerType= '1';
    }
    let query = 'CALL SearchPlayers('+player+','+playerType+');';
    con.query(query,(error, results, fields)=>{
        if(error){
            res.json(error);
        }
        res.json(results[0]);
    })

})

module.exports=playersRouter;