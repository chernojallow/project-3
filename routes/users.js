
var express = require('express');
var router = express.Router();
var mongojs = require("mongojs");
const View = require("../models/View");
const Clinicals = require("../models/Clinicals");
const mongoose = require('mongoose');

//Route to get our view data 
router.get("/", (req, res) => {
    View.find()
        .sort({ _id: -1 })
        .then(views => res.json(views));
});

//Route to post our view data 
router.post("/", function (req, res) {
    console.log(req.body);
    // var id = req.params.id;
    var nName = req.body.name;
    var vValue = req.body.value;
    var nClass = req.body.nameclass;

    // "result object has the exact same key-value pairs of the "view" model
    var result = {
        name: nName,
        nameclass: nClass,
        value: vValue,
    };

    // using the view model, create a new entry
    var entry = new View(result);
    // save the entry to the database
    entry.save(function (err, doc) {
        console.log("Running");
        if (err) {
            console.log(err);
        }
        // Or, relate the comment to the views
        else {
            res.json(doc)

        }
    })
});

// Route to get our clinical data 
router.get("/api/clinicals", (req, res) => {
    Clinicals.find()
        .sort({ _id: -1 })
        .then(clinicals => res.json(clinicals));
});

//Route to save our clinical data 
router.post("/api/clinicals", function (req, res) {
    console.log(req.body);
    // var id = req.params.id;
    var nClass = req.body.nameclass;
    var roomNumber = req.body.room;
    var cTime = req.body.classTime;
    var cInstructor = req.body.instructor;

    // "result object has the exact same key-value pairs of the "view" model
    var result = {
        nameclass: nClass,
        room: roomNumber,
        classTime: cTime,
        instructor: cInstructor
    };

    // using the view model, create a new entry
    var enterResult = new Clinicals(result);
    // save the entry to the database
    enterResult.save(function (err, data) {
        console.log("Running");
        //log any errors
        if (err) {
            console.log(err);
        }
        else {
            res.json(data)
        }
    })
});

//Api to find users by Id

router.get("/:id", function (req, res, next) {
    let id = req.params.id;
    Clinicals.findById(id, function (err, data) {
        if (err) {
            return next(err);
        }
        res.json(data);
    })
})

// Routes to update the clinical schedules

router.post("/api/update/:id", function (req, res) {
    Clinicals.findById(req.params.id, function (err, todo) {
        if (!todo)
            res.status(404).send('data is not found');
        else
            todo.nameclass = req.body.nameclass;
            todo.room = req.body.room;
            todo.classTime = req.body.classTime;
            todo.instructor = req.body.instructor;

        todo.save().then(todo => {
            res.json('Todo updated');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});




// Delete routes 
router.delete("/api/clinicals/:id", function (req, res) {
    Clinicals.findByIdAndRemove( 
        {
            //  _id: mongojs.ObjectID(req.params.id)
            _id: req.params.id
           

    },
        function (error, removed) {

            if (error) {
                console.log(error);
                res.send(error);
            }
            else {
                // console.log(removed);
                  res.send(removed);
            }
        }
    );
});

module.exports = router;

