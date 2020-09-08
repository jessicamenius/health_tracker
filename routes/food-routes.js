const express = require("express");
const router = express.Router();
const { getNutrients, getFood, autoComplete } = require("../ORM/orm");

router.get("/food/:food/:qty/:unit", (req, res) => {
  getFood(req.params.food).then((food) =>
    getNutrients(
      food.data.parsed[0].food.foodId,
      req.params.qty,
      req.params.unit
    ).then((nutrients) => res.json(nutrients.data))
  );
});

router.get("/food/autocomplete/:str", (req, res) => {
  autoComplete(req.params.str)
    .then((response) => res.json(response.data))
    .catch((err) => res.send(err));
});

module.exports = router;
