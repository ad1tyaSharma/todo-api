const Contact = require('../models/Task')

exports.createtask = async (req, res) => {
    try {
        const { title,description,createdBy } = req.body;
        const task = new Task({ title,description,createdBy });
        await task.save();
        res.status(201).json({ message: 'Task created successfully',task });
      } catch (error) {
        res.status(500).json({ message: 'Error creating Task', error });
      }
  };
exports.getalltasks = async (req, res) => {
    try {
        const task = await Task.find({createdBy : req.params.id});
        res.json(task);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching tasks' });
      }
}  

exports.gettask = async (req,res)=>
{
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
      } catch (error) {
        res.status(404).json({ error: 'Task not found' });
      }
}

exports.edittask = async (req,res)=>
{
    try {
        const updatedTask = await Task.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        res.json(updatedTask);
      } catch (error) {
        res.status(400).json({ error: 'Error updating task' });
      }
}
exports.deletetask = async(req,res)=>
{
    try {
        await Task.findByIdAndRemove(req.params.id);
        res.json({ message: 'Task deleted' });
      } catch (error) {
        res.status(400).json({ error: 'Error deleting Task' });
      }
}