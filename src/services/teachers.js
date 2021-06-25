const db = require('./db');
const { tableName, columns } = require('../models/teachers');
const commonServices = require('./common');

module.exports = {
  ...commonServices(tableName, columns),
};
