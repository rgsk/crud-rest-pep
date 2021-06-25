const service = require('../services/batches');
const commonController = require('./common');
const { tableName } = '../models/batches';
module.exports = {
  ...commonController(tableName, service),
};
