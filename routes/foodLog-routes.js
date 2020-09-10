const router = require("express").Router();
const db = require("../models");
const moment = require("moment");

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
router.get("/food/user/:id", (req, res) => {
  db.FoodLog.findAll({ where: { UserId: req.params.id } })
    .then((response) => res.json(response))
    .catch((err) => res.send(err));
});

// get a single food log by its ID ## NOT USER ID ##
router.get("/food/single/:id", (req, res) => {
  db.FoodLog.findOne({ where: { id: req.params.id } })
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
router.delete("/food/delete/:id", (req, res) => {
  db.FoodLog.destroy({ where: { id: req.params.id } })
    .then(() => res.send("Success!"))
    .catch((err) => res.send(err));
});

module.exports = router;
