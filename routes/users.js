// const express = require("express");
// const router = express.Router();
// const db = require("../models");
// const View = require("../models/View");
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// const Viewdata = require("../models/Viewdata");
// const Clinicals = require("../models/Clinicals");
// const Login = require("../models/Login");


// router.get("/api/user", function (req, res) {
//     res.send("Get users");

// });

// router.post("/loginUser", function (req, res) {
//     console.log("test")
//     Login(req.body, function (error, response) {
//         if (error) {
//             return res.json(error)
//         }
//         return res.json(response);
//     })
// });

// router.post("/login", function (req, res) {
//    Login.findOne({ username: req.body.username }, function (error, response) {
//         if (error) {
//             return res.json(error)
//         }
//         response.comparePassword(req.body.password, function (error, user) {
//             if (error) {
//                 return res.json(error)
//             }
//             res.json(user);
//         });
//     })
// })



// //Register user
// router.post('/registerUser', function(req, res, errors){
//     console.log("firing")

// 	var firstname = req.body.firstname;
// 	var lastname = req.body.lastname;
// 	var password = req.body.password;
// 	var username = req.body.username;

// 	//Valdiation
// 	req.checkBody('firstname', 'Name is required').notEmpty();
// 	req.checkBody('lastname', 'Name is required').notEmpty();
// 	req.checkBody('username', 'Username is required').notEmpty();
// 	req.checkBody('password', 'Password is required').notEmpty();

// 	var errors = req.validationErrors();

// 	if(errors){
// 		console.log('Failed to validate');
// 	}
// 	else{
// 		var newUser = new Login({
// 			firstname: firstname,
// 			lastname: lastname,
// 			username: username,
//             password: password,
//             //value: 55
// 		});

// 		Login.createUser(newUser, function(err, user){
// 			if(err) throw err;
// 			console.log(" user route " + user);
// 		});

// 	}

// });

// passport.use(new LocalStrategy(

//     function(username, password, done) {
//         console.log("authentication gets called");
//         Login.getUserByUsername(username, function(err, user){
//             if(err) throw err;
//             if(!user){
//                 return done(null, false, {message: 'Unknown User'});
//             }
  
//              Login.comparePassword(password, user.password, function(err, isMatch){
//                 if(err) throw err;
//                 if(isMatch){
//                     return done(null, user);
//                 } else {
//                     return done(null, false, {message: 'Invalid password'});
//                 }
//             });
//         });
//   }));
  
//   passport.serializeUser(function(user, done) {
//     Login.done(null, user.id);
//   });
  
//   passport.deserializeUser(function(id, done) {
//    Login.getUserById(id, function(err, user) {
//       done(err, user);
//     });
//   });


//   module.exports = router;




var express = require('express');
var router = express.Router();
var Login = require('../models/Login');
var passport = require('passport');
const View = require("../models/View");
const Clinicals = require("../models/Clinicals");
var LocalStrategy = require('passport-local').Strategy;




//route to get our data 
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
router.get("/", (req, res) => {
    Clinicals.find()
      .sort({ _id: -1 })
      .then(clinicals => res.json(clinicals));
   });

//route to save our clinical data 
router.post("/", function (req, res) {
    console.log(req.body);
    // var id = req.params.id;
    var nClass = req.body.nameClass;
   
    // "result object has the exact same key-value pairs of the "view" model
    var result = {
        nameClass: nClass,
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







// var express = require('express');
// var router = express.Router();
// var Login = require('../models/Login');
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;

//Register user
router.post('/registerUser', function(req, res){

	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var password = req.body.password;
	var username = req.body.username;

	// Valdiation
	req.checkBody('firstname', 'Name is required').notEmpty();
	req.checkBody('lastname', 'Name is required').notEmpty();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();

	var errors = req.validationErrors();

	if(errors){
		console.log('Failed to validate');
	}
	else{
		var newUser = new Login({
			firstname: firstname,
			lastname: lastname,
			username: username,
			password: password
		});

		Login.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log(" user route " + user);
		});

		// Set success message
		// req.flash('success_msg', 'You are registered and can now login');
		// res.redirect('/users/login');
	}


});

// Get username if it matches and validate password

passport.use(new LocalStrategy(

  function(username, password, done) {
  	console.log("authentication gets called");
  	Login.getUserByUsername(username, function(err, user){
  		if(err) throw err;
  		if(!user){
  			return done(null, false, {message: 'Unknown User'});
  		}

  		Login.comparePassword(password, user.password, function(err, isMatch){
  			if(err) throw err;
  			if(isMatch){
  				return done(null, user);
  			} else {
  				return done(null, false, {message: 'Invalid password'});
  			}
  		});
  	});
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Login.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/loginUser',
  passport.authenticate('local'),
  function(req, res) {
  	res.json({authenticated: true});
});

// router.get("/profile/:user", function(req, res){

//   var user = req.params.user;

//   User.find({username: user}, function(error, doc) {
//     // Send any errors to the browser
//     if (error) {
//       res.send(error);
//     }
//     // Or send the doc to the browser
//     else {
//       console.log(doc);
//       res.send(doc);
//       //return doc;
//     }
//   });

// });

// router.get("/", function(req, res) {
//   User.find({})
//     // ..and on top of that, populate the notes (replace the objectIds in the notes array with bona-fide notes)
//     .populate("tours_created")
//     // Now, execute the query
//     .exec(function(error, doc) {
//       // Send any errors to the browser
//       if (error) {
//         res.send(error);
//       }
//       // Or send the doc to the browser
//       else {
//         res.send(doc);
//       }
//     });
// });

module.exports = router;



















