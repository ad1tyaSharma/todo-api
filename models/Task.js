const mongoose = require('mongoose');
const Schema = mongoose.Schema;


(taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String, // You can use ObjectId if you want to reference users in another collection
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['todo', 'in-progress', 'completed'], // You can customize the status values
    default: 'todo',
  },
})),
  (Task = mongoose.model("Task", taskSchema));

module.exports = Task;