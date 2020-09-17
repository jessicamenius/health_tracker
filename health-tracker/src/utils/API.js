import axios from "axios";

export default {
  // Given a food, an amount, and a unit of measurement, returns detailed nutritional info
  getNutrients: (food, qty, unit) => axios.get(`/food/${food}/${qty}/${unit}`),

  // Gets all users in the DB, doesn't include stats & food
  getAllUsers: () => axios.get("/users/all"),

  // Get a single user, with all their stats and food logs by the user's ID
  getOneUser: (id) => axios.get("users/one/" + id),

  // obj must include 'UserId:' key
  setStats: (obj) => axios.post("stats/set", obj),

  // obj must include 'UserId:' key
  updateStats: (obj) => axios.post("stats/update", obj),

  // requires UserId, returns their stats
  getStats: (id) => axios.get("stats/one/" + id),

  // must include 'UserId:' key
  newFoodLog: (obj) => axios.post("/food/new", obj),

  // takes user ID
  getUserLogs: (id) => axios.get("/food/user/" + id),

  // takes individual log ID, not user ID
  getSingleLog: (id) => axios.get("/food/single/" + id),

  // must include log ID
  updateSingleLog: (obj) => axios.patch("/food/update", obj),

  // must include log ID
  deleteLog: (id) => axios.delete("/food/delete/" + id),

  // autocomplete route, pass in a string
  autocomplete: (str) => axios.get("/food/autocomplete/" + str),

  // register a new user, passing in all required user info in an object
  register: (obj) => axios.post("users/register", obj),
};
