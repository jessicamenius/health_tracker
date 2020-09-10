const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../config/middleware/auth");
const { json } = require("express");
const db = require("../models");
const passport = require("../config/passport");

router.get("/api", (req, res) => {
  res.send({ msg: "success" });
});

// register a new user
router.post("/register", async (req, res) => {
  try {
    let {
      email,
      password,
      passwordCheck,
      userName,
      firstName,
      lastName,
    } = req.body;

    // validation
    if (!email || !password || !passwordCheck)
      return res.status(400).json({ msg: "Not all fields have been entered" });

    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "Password needs to be at least 5 characters long" });

    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification" });

    const existingUser = await db.User.findOne({ where: { email: email } });

    if (existingUser)
      return res
        .status(400)
        .json({ msg: "Account with this email already exists" });

    if (!userName) userName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    console.log(passwordHash);

    let newUser = db.User.create({
      email,
      password: passwordHash,
      userName,
      firstName,
      lastName,
    });

    // const savedUser = await newUser.save();
    res.json(newUser);
    res.redirect("/login");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ msg: "Not all field have been entered" });

    const user = await db.User.findOne({ where: { email: email } });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered" });
    console.log(user);
    const isMatch = await bcrypt.compareSync(password, user.password, () => {
      if (!isMatch)
        return res.status(400).json({ msg: "Invalid login credentials" });
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    // console.log(token);
    res.json({
      token,
      user: {
        id: user.id,
        userName: user.userName,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// delete user
router.delete("/delete", auth, async (req, res) => {
  // console.log(req.user);
  try {
    const deletedUser = await db.User.destroy(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await db.User.findByPk(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get a user by id
router.get("/", auth, async (req, res) => {
  const user = await db.User.findByPk(req.user);
  res.json({ userName: user.userName, id: user.id });
});

module.exports = router;
