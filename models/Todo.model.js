const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
  title: String,
  category: String,
});
const TodoModel = mongoose.model("todo", todoSchema);
module.exports = { TodoModel };
