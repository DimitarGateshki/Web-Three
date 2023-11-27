const TaskModel = require("../models/TaskModel");


module.exports.createTask = (req, res) => {

    const { task } = req.body;

    TaskModel.create( {task} )
    .then((data) => {
        console.log("Task created");
        res.status(201).send(data);
    }).catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Somesthin went wrong!" })
    });
};

module.exports.getTasks = async (req, res) => {

   const task = await TaskModel.find();
    res.send(task);
};

 module.exports.updateTask = (req, res) => {

    const { id } = req.params;
    const { task } = req.body;

    TaskModel.findByIdAndUpdate(id, {task})
    .then(() =>  res.send("Successfilly updated task"))
    .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Somesthin went wrong!" })
    })
 };

 module.exports.deleteTask = (req, res) => {

    const { id } = req.params;

    TaskModel.findByIdAndDelete(id)
    .then(() =>  res.send("Successfilly deleted task"))
    .catch((err) => {
        console.log(err);
        res.send({ error: err, msg: "Somesthin went wrong!" })
    })
 };