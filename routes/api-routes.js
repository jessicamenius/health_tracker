const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/api", (req, res) => {
  res.json({ msg: "success" });
});

module.exports = router;
