const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');

// load values from .env
dotenv.config();

// express setup
const app = express();
app.use(bodyParser.json());

// static setup 
app.use(express.static('public'));


const port = process.env.PORT;
app.listen(port, () => console.log(`listening on port ${port}...`));



console.log("hello world");

