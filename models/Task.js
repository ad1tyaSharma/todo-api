const mongoose = require('mongoose');
const Schema = mongoose.Schema;


(taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "To Do",
  },
  createdBy: {
    type: String,
    required: true,
  },
})),
  (Task = mongoose.model("Task", taskSchema));

module.exports = Task;