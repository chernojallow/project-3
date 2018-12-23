
var express = require('express');
var router = express.Router();
var Login = require('../models/Login');
var passport = require('passport');
const View = require("../models/View");
const Clinicals = require("../models/Clinicals");
var LocalStrategy = require('passport-local').Strategy;



const booksController = require("../controllers/Controller");


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


router.get('/users/profile', function(req, res){

    var user = req.params.user;
  
    Login.find({username: user}, function(error, doc) {
      // Send any errors to the browser
      if (error) {
        res.send(error);
      }
      // Or send the doc to the browser
      else {
        console.log(doc);
        res.send(doc);
        //return doc;
      }
    });
  
  });


    router.get('/logoutData', function(req,res){
        console.log("logout");
        req.logOut();
        req.session.destroy(function (err) {
            window.location.pathname ="/"
            //    res.redirect('/'); //Inside a callback… bulletproof!
           });
       });




       
// Matches with "/api/books"
router
.get(booksController.findAll)


// Matches with "/api/books/:id"
router
.get(booksController.findById)


module.exports = router;



















