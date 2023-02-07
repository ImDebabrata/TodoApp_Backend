const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { TodoModel } = require("../models/Todo.model");
const { UserModel } = require("../models/User.model");
const todoRouter = express.Router();

todoRouter.get("/get", (req, res) => {
  res.send("All todos");
});

todoRouter.post("/add", async (req, res) => {
  const payload = req.body;
  const userPresent = await UserModel.findOne({ _id: payload.userID });
  if (!userPresent) {
    res.status(404).send({ res: "Please Login First" });
    return;
  }
  try {
    const todo = new TodoModel(payload);
    await todo.save();
    res.send({ res: "Added new todo" });
  } catch (err) {
    res.send({ res: err });
  }
});

module.exports = { todoRouter };
