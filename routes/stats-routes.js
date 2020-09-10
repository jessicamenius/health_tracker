const router = require("express").Router();
const db = require("../models");

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
router.get("/stats/one/:id", (req, res) => {
  db.Stats.findOne({ where: { UserId: req.params.id } })
    .then((response) => res.json(response))
    .catch((err) => res.send(err));
});

module.exports = router;
