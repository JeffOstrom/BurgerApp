var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// get route index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback 
  burger.all(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});

// post route 
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  burger.create(req.body.burger_name, function(result) {

    console.log(result);
    res.redirect("/");
  });
});

// route back to index
router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
