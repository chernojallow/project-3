
var express = require('express');
var router = express.Router();
const View = require("../models/View");
const Clinicals = require("../models/Clinicals");

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

router.get("api/clinicals/:id", function (req, res, next) {
    let id = req.params.id;
    Clinicals.findById(id, function (err, data) {
        if(err){
            return next(err);
        }
         res.json(data);
    })
})

//Api for Delete data from database  
router.delete("/:id", function (req, res, next) {
    Clinicals.findByIdAndRemove(req.params.id, req.body, function (err, data) {

        if (err)
            return next(err);
        res.json(data)
    });
})

// Get username if it matches and validate password
module.exports = router;

