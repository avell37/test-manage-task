const Router = require('express');
const router = new Router();
const TaskController = require('../controllers/taskController');

router.post('/', TaskController.addNewTask);
router.get('/', TaskController.getAllTasks);
router.patch('/status', TaskController.updateStatus)
router.delete('/:id', TaskController.deleteTask);

module.exports = router;