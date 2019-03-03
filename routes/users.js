
var express = require('express');
var router = express.Router();
const View = require("../models/View");
const Clinicals = require("../models/Clinicals");


//route to get our  data 
router.get("/", (req, res) => {
    View.find()
      .sort({ _id: -1 })
      .then(views => res.json(views));
   });

 //route to save our data 
router.post("/", function (req, res) {
    console.log(req.body);
    // var id = req.params.id;
   var nName = req.body.name;
    var vValue = req.body.value;

    // "result object has the exact same key-value pairs of the "view" model
    var result = {
       name: nName,
        value: vValue
    };
    
   // using the view model, create a new entry
    var entry = new View (result);
   // save the entry to the database
    entry.save(function (err, doc) {
        console.log("Running");
        //log any errors
        if (err) {
            console.log(err);
        }
        // Or, relate the comment to the views

        else {
            res.json(doc)
  
        }
    })

});


// // route to get our clinical data 
router.get("/api/clinicals", (req, res) => {
    Clinicals.find()
      .sort({ _id: -1 })
      .then(clinicals => res.json(clinicals));
   });

//route to save our clinical data 
router.post("/api/clinicals", function (req, res) {
    console.log(req.body);
    // var id = req.params.id;
    var nClass = req.body.nameclass;
    var roomNumber = req.body.room;
   
    // "result object has the exact same key-value pairs of the "view" model
    var result = {
        nameclass: nClass,
        room: roomNumber
        
    };
    
   // using the view model, create a new entry
    var enterResult = new Clinicals (result);
   // save the entry to the database
    enterResult.save(function (err, doc) {
        console.log("Running");
        //log any errors
        if (err) {
            console.log(err);
        }
        // Or, relate the comment to the views

        else {
            res.json(doc)
  
        }
    })

});


// Get username if it matches and validate password

module.exports = router;

