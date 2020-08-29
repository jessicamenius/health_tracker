const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) =>
  !req.user
    ? res.sendFile(path.join(__dirname, "../client/landing.html"))
    : res.sendFile(path.join(__dirname, "../client/dashboard.html"))
);

router.get("/dashboard", (req, res) =>
  !req.user
    ? res.sendFile(path.join(__dirname, "../client/landing.html"))
    : res.sendFile(path.join(__dirname, "../client/dashboard.html"))
);

// router.get("/collection", (req, res) =>
//   !req.user
//     ? res.sendFile(path.join(__dirname, "../client/landing.html"))
//     : res.sendFile(path.join(__dirname, "../client/collection.html"))
// );
module.exports = router;
