const express = require("express");
const { UserModel } = require("../models/User.model");
const loginRouter = express.Router();

loginRouter.post("/", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(401).send({ res: "Please input Email and Password" });
  }
  res.send("Login Route");
});

module.exports = { loginRouter };
