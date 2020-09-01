const express = require("express");
const router = express.Router();
require("dotenv").config();
const axios = require("axios");

const getFood = (str) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.APP_ID}&app_key=${process.env.FOOD_API}&ingr=${str}`,
    })
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
};

const getNutrients = (id, qty, unit) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `https://api.edamam.com/api/food-database/v2/nutrients?app_id=${process.env.APP_ID}&app_key=${process.env.FOOD_API}`,
      data: {
        ingredients: [
          {
            quantity: qty,
            measureURI: `http://www.edamam.com/ontologies/edamam.owl#Measure_${unit}`,
            foodId: id,
          },
        ],
      },
    })
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
};

router.get("/food/:food", (req, res) => {
  getFood(req.params.food).then((food) =>
    getNutrients(
      food.data.parsed[0].food.foodId,
      100,
      "gram"
    ).then((nutrients) => res.json(nutrients.data))
  );
});

module.exports = router;
