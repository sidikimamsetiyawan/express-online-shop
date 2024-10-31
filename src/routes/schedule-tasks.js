const express = require('express');

const ScheduleTaskController = require('../controller/schedule-tasks');

const router = express.Router();

// POST
router.post('/', ScheduleTaskController.displayScheduleTasks);

module.exports = router;