const express = require("express");
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("client/public"));

const userRoutes = require("./routes/users.js");
app.use(userRoutes);

mongoose.connect(process.env.MONGODB_URL ||"mongodb://localhost/project-3");


app.listen(PORT, function() {
  console.log("connected", PORT)
});
