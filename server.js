const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const db = require("./models");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);


if (process.env.NODE_ENV === "production") {
  app.use(express.static("health-tracker/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "health-tracker", "build", "index.html")
    );
  });
}

app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

db.sequelize
  .sync()
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Listening at: http://localhost:${PORT}`)
    )
  );
