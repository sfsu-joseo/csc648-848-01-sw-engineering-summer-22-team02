const express = require("express");
const router = require('./API/router');
const searchNewsRouter = require("./API/SearchNewsAPI");
const bodyParser= require('body-parser');
const cors = require('cors');

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



app.listen(8080, () => console.log('Server Begins'));