const express = require('express');
const taskController = require('../controllers/taskController')
const taskRouter = express.Router();

taskRouter.post('/alltasks', taskController.getalltasks)
taskRouter.get('/:id', taskController.gettask)
taskRouter.post('/create', taskController.createtask)
taskRouter.put('/edit/:id', taskController.edittask)
taskRouter.delete('/delete/:id', taskController.deletetask)



module.exports = taskRouter;