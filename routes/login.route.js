const express = require("express");
const { UserModel } = require("../models/User.model");
const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  console.log("req:", req.body);
  res.send("Login Route");
});

module.exports = { loginRouter };
