const db = require('./db');
const { tableName, columns } = require('../models/schedules');
const commonServices = require('./common');

module.exports = {
  ...commonServices(tableName, columns),
};
