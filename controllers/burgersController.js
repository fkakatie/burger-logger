var express = require("express");

var router = express.Router();

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index");
});

module.exports = router;
