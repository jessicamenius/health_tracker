const router = require("express").Router();
const db = require("../models");

// get a single user from the db by their id
// includes all info about the user
router.get("/users/one/:id", (req, res) => {
  db.User.findOne({
    where: { id: req.params.id },
    include: [db.Stats, db.FoodLog],
  })
    .then((user) => res.json(user))
    .catch((err) => res.send(err));
});

router.get("/users/all", (req, res) => {
  db.User.findAll({
    include: [db.Stats, db.FoodLog],
  })
    .then((user) => res.json(user))
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

module.exports = router;
