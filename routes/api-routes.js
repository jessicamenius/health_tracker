const express = require("express");
const router = express.Router();
const db = require("../models");

// ========== USER ROUTES ==========

// Get all users from the database
router.get("/users/all", (req, res) => {
  db.User.findAll({
    include: [db.Stats],
  })
    .then((users) => res.send(users))
    .catch((err) => res.send(err));
});

// get a single user from the db by their id
router.get("/users/:id", (req, res) => {
  db.User.findOne({
    where: { id: req.params.id },
    include: [db.Stats],
  })
    .then((user) => res.send(user))
    .catch((err) => res.send(err));
});

// posts a new user
// all fields required
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

// ========== STATS ROUTES ==========

// Set a user's stats
router.post("/stats/set", (req, res) => {
  db.Stats.create({
    height: req.body.height,
    weight: req.body.weight,
    gender: req.body.gender,
    age: req.body.age,
    bmi: req.body.bmi,
    UserId: req.body.UserId,
  })
    .then(() => res.send("Success"))
    .catch((err) => res.send(err));
});

// Update a user's Stats
router.patch("/stats/update", (req, res) => {
  db.Stats.update(
    {
      height: req.body.height,
      weight: req.body.weight,
      gender: req.body.gender,
      age: req.body.age,
      bmi: req.body.bmi,
    },
    {
      where: { UserId: req.body.UserId },
    }
  )
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
});
module.exports = router;
