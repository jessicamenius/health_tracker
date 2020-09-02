import axios from "axios";

export default {
  getNutrients: (food, qty, unit) => {
    return axios.get(`/food/${food}/${qty}/${unit}`);
  },
};
