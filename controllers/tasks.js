const Task = require('../model/Task');
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).send(task);
};

const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res
        .status(404)
        .json({ message: `No such task with this id ${taskId} exists ` });
    }
    res.status(200).json({ task });
  } catch (err) {
    console.log('innnn');

    res.status(500).json({ message: err });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res
        .status(404)
        .json({ message: `No such task with this id ${taskId} exists ` });
    }
    res.status(200).json({ task });
  } catch (err) {
    console.log('innnn');

    res.status(500).json({ message: err });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res
        .status(404)
        .json({ message: `No such task with this id ${taskId} exists ` });
    }
    res.status(200).json({ task });
  } catch (err) {
    console.log('innnn');

    res.status(500).json({ message: err });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
