const con = require('./conn');

const players = require('./players.json');

var startingPlayerID =1;

const axios = require("axios");

async function callInertBaseketballPlayerQuery(firstName,lastName)
{
    let queryOne = "INSERT INTO Player (Player_ID,PlayerName,PlayerType) VALUES ("+startingPlayerID+",'"+firstName+" "+lastName+"',0);";
    console.log(queryOne);
    let queryTwo = 'INSERT INTO Basketball_Player (Games,FieldGoalsMade, FieldGoalsAttempted,TwoPointersMad,TwoPointersAttempted,ThreePointersMad,ThreePointersAttempted,fk_Player_ID,playerURL) VALUES ('+Math.random()*100+','+Math.random()*100+','+Math.random()*100+','+Math.random()*100+','+Math.random()*100+','+Math.random()*100+','+Math.random()*100+','+startingPlayerID+','+'"https://nba-players.herokuapp.com/players/'+lastName+'/'+firstName+'");';
    con.query(queryOne,(error, results, fields)=>{
        console.log(results);
    })
    con.query(queryTwo,(error, results, fields)=>{
        console.log(results);
    })
    startingPlayerID+=1;
}

players.forEach(player=>{
    const playerName = player.name.split(" ");
    callInertBaseketballPlayerQuery(playerName[0],playerName[1]);

})