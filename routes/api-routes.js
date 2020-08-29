const express = require("express");
const router = express.Router();
const db = require("../models");

// ========== USER ROUTES ==========

// get all users from the database
// only shows basic user info
router.get("/users/all", (req, res) => {
  db.User.findAll()
    .then((users) => res.json(users))
    .catch((err) => res.send(err));
});

// get a single user from the db by their id
// includes all info about the user
router.get("/users/one", (req, res) => {
  db.User.findOne({
    where: { id: req.body.UserId },
    include: [db.Stats, db.FoodLog],
  })
    .then((user) => res.json(user))
    .catch((err) => res.send(err));
});

// post a new user
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

// update a user's information
// all fields are required
router.patch("/users/update", (req, res) => {
  db.User.update(
    {
      userName: req.body.userName,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    },
    { where: { id: req.body.UserId } }
  )
    .then(() => res.send("Success!"))
    .catch((err) => res.send(err));
});

// delete a user and all of their related information
router.delete("/users/delete", (req, res) => {
  db.User.destroy({
    where: { id: req.body.UserId },
  })
    .then(() => res.send("Success"))
    .catch((err) => res.send(err));
});

// ========== STATS ROUTES ==========

// set a user's stats
router.post("/stats/set", (req, res) => {
  db.Stats.create({
    height: req.body.height,
    weight: req.body.weight,
    gender: req.body.gender,
    age: req.body.age,
    bmi: req.body.bmi,
    bmr: req.body.bmr,
    UserId: req.body.UserId,
  })
    .then(() => res.send("Success"))
    .catch((err) => res.send(err));
});

// update a user's stats
router.patch("/stats/update", (req, res) => {
  db.Stats.update(
    {
      height: req.body.height,
      weight: req.body.weight,
      gender: req.body.gender,
      age: req.body.age,
      bmi: req.body.bmi,
      bmr: req.body.bmr,
    },
    {
      where: { UserId: req.body.UserId },
    }
  )
    .then(() => res.send("Success!"))
    .catch((err) => res.send(err));
});

// Get a single user's Stats
router.get("/stats/one", (req, res) => {
  db.Stats.findOne({ where: { UserId: req.body.UserId } })
    .then((response) => res.json(response))
    .catch((err) => res.send(err));
});

// ========== FOOD LOG ROUTES ==========

// create a new food log
router.post("/food/new", (req, res) => {
  db.FoodLog.create({
    foodName: req.body.foodName,
    carbs: req.body.carbs,
    protein: req.body.protein,
    fat: req.body.fat,
    calories: req.body.calories,
    UserId: req.body.UserId,
  })
    .then(() => res.send("Success"))
    .catch((err) => res.send(err));
});

// get all food logs belonging to a user
router.get("/food/user", (req, res) => {
  db.FoodLog.findAll({ where: { UserId: req.body.UserId } })
    .then((response) => res.json(response))
    .catch((err) => res.send(err));
});

// get a single food log by its ID ## NOT USER ID ##
router.get("/food/single", (req, res) => {
  db.FoodLog.findOne({ where: { id: req.body.id } })
    .then((response) => res.json(response))
    .catch((err) => res.send(err));
});

// update a food log by its ID ## NOT USER ID ##
router.patch("/food/update", (req, res) => {
  db.FoodLog.update(
    {
      foodName: req.body.foodName,
      carbs: req.body.carbs,
      protein: req.body.protein,
      fat: req.body.fat,
      calories: req.body.calories,
    },
    { where: { id: req.body.id } }
  )
    .then(() => res.send("Success!"))
    .catch((err) => res.send(err));
});

// delete a log by its ID ## NOT USER ID ##
router.delete("/food/delete", (req, res) => {
  db.FoodLog.destroy({ where: { id: req.body.id } })
    .then(() => res.send("Success!"))
    .catch((err) => res.send(err));
});

module.exports = router;
