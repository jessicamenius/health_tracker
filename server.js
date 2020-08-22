const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
const db = require("./models");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

app.listen(PORT, () => console.log(`Listening at: http://localhost:${PORT}`));
