const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/user", function(req, res){
   res.send("Get users");


});

router.post("/api/user", function(req, res){
 res.send("Post users");
});


module.exports = router;

