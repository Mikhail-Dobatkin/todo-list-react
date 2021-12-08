import express from "express";
import taskControllers from '../tasks.controllers/task.controllers'

const router = express.Router();


router.get('/allTasks', taskControllers.getAllTasks)
router.post('/addTask', taskControllers.createNewTask)
router.delete('/deleteTask', taskControllers.deleteTask)
router.patch('/editTask', taskControllers.updateTask)

export default router