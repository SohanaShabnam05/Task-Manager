import express, { Router } from "express";
import { addTask, getAllTasks,toggleTaskDone, updateTask, deleteTask  } from "../controller/task-controller.js";


const route = express.Router();

route.post('/tasks', addTask)
route.get('/tasks', getAllTasks);
route.get('/tasks/:id', toggleTaskDone);
route.put('/tasks/:id', updateTask);
route.delete('/tasks/:id', deleteTask);



export default route;