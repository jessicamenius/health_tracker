const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/users/all", (req, res) => {
  db.User.findAll()
    .then((users) => res.send(users))
    .catch((err) => res.send(err));
});

router.post("/users/new", (req, res) => {
  db.User.create({
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  })
    .then(() => res.send("Success!"))
    .catch((err) => res.send(err));
});

module.exports = router;
