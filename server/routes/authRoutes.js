const express = require("express");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const router = express.Router();

//@route POST /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exites" });
    const user = await User.create({ username, email, password });
    const token = generateToken(user._id);
    res.status(201).json({
      token,
      user: user.username,
      email: user.email,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});
router.get("/register",(req,res)=>{
    res.send("api is running")
})

//@route POST /api/auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    res.json({
      token,
      user: user.username,
      email: user.email,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
