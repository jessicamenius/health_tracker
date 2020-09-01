const express = require("express");
const router = express.Router();
const { getNutrients, getFood } = require("../ORM/orm");

router.get("/food/:food/:qty/:unit", (req, res) => {
  getFood(req.params.food).then((food) =>
    getNutrients(
      food.data.parsed[0].food.foodId,
      req.params.qty,
      req.params.unit
    ).then((nutrients) => res.json(nutrients.data))
  );
});

module.exports = router;
