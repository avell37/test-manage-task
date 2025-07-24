const Router = require('express');
const router = new Router();
const TaskRouter = require('./taskRouter');

router.use('/tasks', TaskRouter);

module.exports = router;