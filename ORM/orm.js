require("dotenv").config();
const axios = require("axios");

const getFood = (str) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `https://api.edamam.com/api/food-database/v2/parser?app_id=${process.env.APP_ID}&app_key=${process.env.FOOD_API}&ingr=${str}`,
    })
      .then((res) => resolve(res))
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
            quantity: parseInt(qty),
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

<<<<<<< HEAD

module.exports = { getFood, getNutrients };
=======
const autoComplete = (str) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `http://api.edamam.com/auto-complete?q=${str}&limit=10&app_id=${process.env.APP_ID}&app_key=${process.env.FOOD_API}`,
    })
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
};

module.exports = { getFood, getNutrients, autoComplete };
>>>>>>> 97cacddd4fa4d13dffc8db68c0091581fd648465
