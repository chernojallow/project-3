const express = require("express");
const router = express.Router();
const db = require("../models");
const View = require("../models/View");
const Viewdata = require("../models/Viewdata");
const Clinicals = require("../models/Clinicals");

router.get("/api/user", function (req, res) {
    res.send("Get users");

});

router.post("/api/user", function (req, res) {
    db.Login.create(req.body, function (error, response) {
        if (error) {
            return res.json(error)
        }
        return res.json(response);
    })
});

router.post("/login", function (req, res) {
    db.Login.findOne({ username: req.body.username }, function (error, response) {
        if (error) {
            return res.json(error)
        }
        response.comparePassword(req.body.password, function (error, user) {
            if (error) {
                return res.json(error)
            }
            res.json(user);
        });
    })
})




// route to get our data 
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
// router.get("/clinicals", (req, res) => {
//     Clinicals.find()
//       .sort({ _id: -1 })
//       .then(clinicals => res.json(clinicals));
//    });

// //route to save our clinical data 
// router.post("/clinicals", function (req, res) {
//     console.log(req.body);
//     // var id = req.params.id;
//     var nClass = req.body.nameClass;
   
//     // "result object has the exact same key-value pairs of the "view" model
//     var result = {
//         nameClass: nClass,
//     };
    
//    // using the view model, create a new entry
//     var enterResult = new Clinicals (result);
//    // save the entry to the database
//     enterResult.save(function (err, doc) {
//         console.log("Running");
//         //log any errors
//         if (err) {
//             console.log(err);
//         }
//         // Or, relate the comment to the views

//         else {
//             res.json(doc)
  
//         }
//     })

// });











module.exports = router;


