const service = require('../services/schedule_teacher');
const commonController = require('./common');
const { tableName } = '../models/schedule_teacher';
module.exports = {
  ...commonController(tableName, service),
  deleteEntriesWithScheduleId: async (req, res, next) => {
    try {
      res.json(
        await service.deleteEntriesWithScheduleId(req.params.schedule_id)
      );
    } catch (err) {
      console.error(`${tableName} deleteEntriesWithScheduleId`, err.message);
      next(err);
    }
  },
};
