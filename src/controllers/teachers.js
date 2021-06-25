const service = require('../services/teachers');
const commonController = require('./common');
const { tableName } = '../models/teachers';
module.exports = {
  ...commonController(tableName, service),
};
