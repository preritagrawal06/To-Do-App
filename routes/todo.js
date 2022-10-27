const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');

router.get('/', todoController.getList);
router.get('/new', todoController.getAddTask);
router.post('/new', todoController.postAddTask);
router.post('/delete-task', todoController.postDeleteTask);

module.exports = router;