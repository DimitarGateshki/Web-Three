const { Router } = require("express");

const { 
    createTask,
    getTasks,
    updateTask,
    deleteTask } = require("../controllers/TaskController");

const router = Router();

router.post("/create", createTask);
router.get("/get", getTasks);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;