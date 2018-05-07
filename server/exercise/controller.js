var express = require('express');
var Exercise = require('./model');

var app = express.Router();

// var Exercise = require('./model');

var exercise = new Exercise();

module.exports = app
    .get('/exercise', (req, res) => 
        res.send(exercise.getExercise(req.query.gymgoerId) )
    )
    .get('/state', (req, res) => res.send(exercise) )
    .post('/exercise', (req, res) => {
        console.log(req.body);
        exercise.selectExercise(req.body.text, req.body.gymgoerId);
        res.send( { success: true } );
    })
