const express = require("express");
const { query } = require("../conn");
const con = require("../conn");

const gamesRouter = express.Router();

gamesRouter.post('/getGames',(req,res)=>{

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');


    let gameID = req.body.gameID == null || req.body.gameID.trim() == "" ? 'NULL' : '"'+ req.body.gameID.trim().toLowerCase()+'"';

    let query = 'CALL GetGames('+gameID+');';

    con.query(query,(error, results, fields)=>{
        if(error){
            res.json(error);
        }
        res.json(results[0][0]);
    })
})

gamesRouter.post('/getPosts',(req,res)=>{

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');


    let gameID = req.body.gameID == null || req.body.gameID.trim() == "" ? 'NULL' : '"'+ req.body.gameID.trim().toLowerCase()+'"';

    let query = 'CALL GetPosts('+gameID+');';
    
    con.query(query,(error, results, fields)=>{
        if(error){
            res.json(error);
        }
        res.json(results[0]);
    })

})

gamesRouter.post('/insertPost',(req,res)=>{

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    let postDate = req.body.postDate == null || req.body.postDate.trim() == "" ? 'NULL' : '"'+req.body.postDate.trim().toLowerCase()+'"';
    let content = req.body.content == null || req.body.content.trim() == "" ? 'NULL' : '"'+req.body.content.trim()+'"';
    let authorID = req.body.authorID == null || req.body.authorID.trim() == "" ? 'NULL' : '"'+req.body.authorID.trim().toLowerCase()+'"';
    let gameID = req.body.gameID == null || req.body.gameID.trim() == "" ? 'NULL' : '"'+ req.body.gameID.trim().toLowerCase()+'"';

    if(authorID=='NULL')
    {
        res.json("Login Required");
    }

    else if (content=='NULL')
    {
        res.json("Content cannot be empty");

    }
    else
    {
        let query = 'CALL InsertPost('+postDate+','+content+','+authorID+','+gameID+');';
        con.query(query,(error, results, fields)=>{
            if(error){
                res.json(error);
            }
            let secondQuery = 'CALL GetPosts('+gameID+');';

            con.query(secondQuery,(error, results, fields)=>{
                if(error){
                    res.json(error);
                }
                res.json(results[0]);
            })

        })
    }
})

gamesRouter.post('/deletePost',(req,res)=>{
    let postID = req.body.postID == null || req.body.postID.trim() == "" ? 'NULL' : '"'+ req.body.postID.trim().toLowerCase()+'"';
    let gameID = req.body.gameID == null || req.body.gameID.trim() == "" ? 'NULL' : '"'+ req.body.gameID.trim().toLowerCase()+'"';

    let query = 'CALL DeletePostByPostID('+postID+');';
    con.query(query,(error, results, fields) => {
        if(error)
        {
            res.json(error);
        }
        else
        {
            let secondQuery = 'CALL GetPosts('+gameID+');';
            con.query(secondQuery,(error, results, fields)=>{
                if(error){
                    res.json(error);
                }
                res.json(results[0]);
            })
        }
    })

})

gamesRouter.post('/searchGame',(req,res)=>{

    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');


    let postDate = req.body.postDate == null || req.body.postDate.trim() == "" ? 'NULL' : '"'+req.body.postDate.trim().toLowerCase()+'"';
    let sport = req.body.sport == null || req.body.sport.trim() == ""  ? 'NULL' : req.body.sport.trim().toLowerCase();
    if(sport=="basketball")
    {
        sport='0';
    }
    else if (sport=="baseball")
    {
     sport= '1';
    }
    let team = req.body.team == null || req.body.team.trim() == "" ? 'NULL' : '"'+req.body.team.trim().toLowerCase()+'"';

    let query = 'CALL SearchGames('+postDate+','+sport+','+team+');';
    con.query(query,(error, results, fields)=>{
        if(error){
            res.json(error);
        }
        res.json(results[0]);
    })
})



module.exports=gamesRouter;