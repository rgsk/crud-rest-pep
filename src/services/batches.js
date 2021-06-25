const db = require('./db');
const { tableName, columns } = require('../models/batches');
const commonServices = require('./common');

module.exports = {
  ...commonServices(tableName, columns),
};
