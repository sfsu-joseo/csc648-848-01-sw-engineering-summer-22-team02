const express = require("express");
const router = require('./API/router');
const searchNewsRouter = require("./API/SearchNewsAPI");
const bodyParser= require('body-parser');
const cors = require('cors');
const accountRouter = require("./API/accountAPI");
const articleRouter = require("./API/ArticleAPI");
const gamesRouter = require("./API/GamesAPI");
const playersRouter = require("./API/PlayersAPI");

const app = express();


app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/",router);

app.use('/api/searchnews/',searchNewsRouter);
app.use('/api/account/',accountRouter);
app.use('/api/article',articleRouter);
app.use('/api/games',gamesRouter);
app.use('/api/players',playersRouter);



app.listen(8080, () => console.log('Server Begins'));