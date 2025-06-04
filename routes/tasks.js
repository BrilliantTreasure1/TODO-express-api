const express = require('express');
const router = express.Router();
const {
    getTasks,
  createTasks,
  updateTasks,
  deleteTasks
} = require('../controller/tasksController');

//GET  /tasks
router.get("/" , getTasks);

// POST /tasks
router.post('/', createTasks);

// PUT /tasks/:id
router.put('/:id', updateTasks);

// DELETE /tasks/:id
router.delete('/:id', deleteTasks);

module.exports = router;

