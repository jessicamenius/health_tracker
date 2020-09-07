const router = require("express").Router();

const autoComplete = (str) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `http://api.edamam.com/auto-complete?q=${str}&limit=10&app_id=${FOOD_API}&app_key=${YOUR_APP_KEY}`,
    })
      .then((response) => resolve(response))
      .catch((err) => reject(err));
  });
};

module.exports = router;
