const express = require("express");
const router = express.Router();
const db = require("../models/userLogin");
const view = require("../models/View");

const eval =require ("../pages/View");

router.get("/api/user", function(req, res){
   res.send("Get users");

});

router.post("/api/user", function(req, res){
   db.User.create(req.body, function(error, response) {
       if(error){
           return res.json(error)
       }
       return res.json(response);
   })
});

router.post("/login", function(req, res){
    db.User.findOne({username:req.body.username},function(error,response){
        if(error){
            return res.json(error)
        }
        response.comparePassword(req.body.password, function (error, user) {
            if(error){
             return res.json(error)
            }
            res.json(user);
        });
    })
})


/*
router.put("/api/user/:id", function(req, res){
    res.send("update users");
});

router.delete("/api/user/:id", function(req, res){
    res.send("Delete users");
});


*/



/*
router.post("/view", (req, res) => {
  axios
    .get( { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

*/



router.get("/view", function(req, res){
    res.send("Get users");
 
 });



router.post("/view", function(req, res){
    console.log("here")
    db.________.view(req.body, function(error, response) {
        if(error){
            return res.json(error)
        }
        return res.json(response);
    })
 });

module.exports = router;


