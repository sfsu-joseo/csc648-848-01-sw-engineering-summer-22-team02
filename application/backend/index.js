const express = require("express");
const router = require('./API/router');
const searchNewsRouter = require("./API/SearchNewsAPI");
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/",router);

app.use('/api/searchnews/',searchNewsRouter);

app.use(cors());

app.listen(8080, () => console.log('Server Begins'));