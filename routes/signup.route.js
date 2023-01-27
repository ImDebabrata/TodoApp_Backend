const express = require("express");
const { UserModel } = require("../models/User.model");
const signupRouter = express.Router();

signupRouter.post("/", (req, res) => {
  res.send("Signup Route");
});

module.exports = { signupRouter };
