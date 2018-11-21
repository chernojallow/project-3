const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
var expressValidator 	= require('express-validator');
var session 			= require('express-session');
var passport = require("passport");
var flash 				= require('connect-flash');
var cookieParser 		= require('cookie-parser');
var bodyParser 			= require("body-parser");
var logger 	= require("morgan");





const app = express();


//app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());




app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(cookieParser());




app.use(session({
	secret: 'secret', 
	saveUninitialized: true,
	resave: true
}));


// Express validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("client/public"));

const userRoutes = require("./routes/users.js");
app.use(userRoutes);
app.use("/api/view", userRoutes);
app.use("/api/clinicals", userRoutes);


mongoose.connect(process.env.MONGODB_URL ||"mongodb://localhost/Login")
.then(() => console.log("MongoDB Connected"))
 .catch(err => console.log(err));

 


 app.use(passport.initialize());
 app.use(passport.session());
 app.use(flash());



 app.use(function (req, res, next){
	res.locals.success_msg = req.flash('success_msg');
	res.locals.error_msg = req.flash('error_msg');
	res.locals.error = req.flash('error');
	res.locals.user = req.user || null;
	next();
});



app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
  console.log("connected", PORT)
});








