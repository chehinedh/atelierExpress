const express = require("express");
const { db } = require("../model/user");
var router = express.Router();
const User = require("../model/user");

router.post("/add", function (req, res) {
  var user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  user.save();
  res.send();
});
router.get("/", function (req, res) {
  User.find(function (err, data) {
    res.json(data);
  });
});
router.get("/search", (req, res) => {
  User.find({ username: req.body.search }, (err, data) => {
    if (data.length === 0) {
      res.send(" user n'existe pas ");
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
