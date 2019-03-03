

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const session = require("express-session");
const cors = require("cors");
const controller = require("./controller");


//--------Express configuration-------//
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
  app.use(express.static("client/build"));

// Add routes, both API and view

var userRoutes = require("./routes/users.js");
app.use(userRoutes);
app.use("/api/view", userRoutes);
app.use("/api/clinicals", userRoutes);

// Connect to the Mongo DB
if(process.env.NODE_ENV === "production"){
  // mongoose.connect(`mongodb://heroku_z222hpz0:ld5ifsej4gs6a0l39gn1u42pr4@ds123124.mlab.com:23124/heroku_z222hpz0`);
   mongoose.connect(`mongodb://heroku_phbgss49:hnil7jigfvqaqdkovn9f15gdta@ds159025.mlab.com:59025/heroku_phbgss49`);
  // mongoose.connect(`mongodb://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@ds159025.mlab.com:59025/heroku_pg44b6xh`);

  
}
else{
  mongoose.connect('mongodb://localhost/Login');

}

var db = mongoose.connection;

// Show any Mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});


app.use(
  cors({
    origin: [
      "http://localhost:3000",
    ],
    methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    credentials: true //allow setting of cookies
  })
);


//---------Express Session------//
app.use(
  session({
    secret: "supersecretstring12345!",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 60000 * 30 }
  })
);

controller(app);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
