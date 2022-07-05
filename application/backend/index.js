const express = require("express");
const router = require('./API/router');
const searchNewsRouter = require("./API/SearchNewsAPI");
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/",router);

app.use('/api/searchnews/',searchNewsRouter);

app.use(cors(corsOptions));


app.listen(8080, () => console.log('Server Begins'));