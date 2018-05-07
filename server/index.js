var express = require('express')
var app = express()

const servername = "localhost";
const port = 8080;

const exercise = require('./exercise/controller');

app
    .use('/exercise', exercise)
    .listen(port)

console.log("running on http://" + servername + ":" + port)