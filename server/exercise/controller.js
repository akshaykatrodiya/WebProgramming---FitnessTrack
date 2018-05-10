var express = require('express');
var Exercise = require('./model');

var app = express.Router();

// var Exercise = require('./model');

var exercise = new Exercise();

module.exports = app
    .get('/workouts', (req, res) => 
        res.send(exercise.getExercise(req.query.gymgoerId) )
    )
    .get('/state', (req, res) => res.send(exercise) )
    .post('/workouts', (req, res) => {
        console.log(req.body);
        try {
            exercise.selectExercise(req.body.text, req.body.gymgoerId);
            req.send({ success: true });
        } catch(error) {
            res.status(403).send({success: false, message: error.message})
        }
        
        res.send( { success: true } );
    })
