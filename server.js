const express = require("express");
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("client/public"));

const userRoutes = require("./routes/users.js");
app.use("/api/view", userRoutes);
app.use("/api/clinicals", userRoutes);

mongoose.connect(process.env.MONGODB_URL ||"mongodb://localhost/View")
.then(() => console.log("MongoDB Connected"))
 .catch(err => console.log(err));

 


//  Use apiRoutes
// app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs

// app.post("/view", function(req, res){
//   console.log(req.body);
//   res.send("This worked");
// })

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log("connected", PORT)
});
