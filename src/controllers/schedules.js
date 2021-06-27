const service = require('../services/schedules');
const commonController = require('./common');
const { tableName } = '../models/schedules';
module.exports = {
  ...commonController(tableName, service, {
    create: { title: '(No title)', description: '' },
    update: { title: '(No title)' },
  }),
};
