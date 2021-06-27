const express = require('express');
const router = express.Router();
const controller = require('../controllers/schedule_teacher');
router.get('/', controller.getMultiple);
router.get('/:id', controller.getSingle);
router.post('/', controller.create);
router.patch('/:id', controller.update);
router.delete('/:id', controller.remove);
router.delete(
  '/schedules/:schedule_id',
  controller.deleteEntriesWithScheduleId
);
module.exports = router;
