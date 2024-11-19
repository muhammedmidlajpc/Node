const express = require("express");
const todoController = require("../controller/todo.controller");
const router = express.Router();
router.get("/todos", todoController.getTodos);
router.post("/todos", todoController.addTodo);
router.get("/todos/:id", todoController.getTodoById);
router.put("/todos/:id", todoController.editTodo);
router.delete("/todos/:id", todoController.deletTodo);

module.exports = router;
