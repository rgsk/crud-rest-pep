const service = require('../services/schedules');
const { tableName } = '../models/schedules';
module.exports = {
  getMultiple: async function (req, res, next) {
    try {
      res.json(await service.getMultiple());
    } catch (err) {
      console.error(`${tableName} getMultiple`, err.message);
      next(err);
    }
  },
  getSingle: async function (req, res, next) {
    try {
      res.json(await service.getSingle(req.params.id));
    } catch (err) {
      console.error(`${tableName} getSingle`, err.message);
      next(err);
    }
  },
  create: async function (req, res, next) {
    try {
      res.json(await service.create(req.body));
    } catch (err) {
      console.error(`${tableName} create`, err.message);
      next(err);
    }
  },
  update: async function (req, res, next) {
    try {
      res.json(await service.update(req.params.id, req.body));
    } catch (err) {
      console.error(`${tableName} update`, err.message);
      next(err);
    }
  },
  remove: async function (req, res, next) {
    try {
      res.json(await service.remove(req.params.id));
    } catch (err) {
      console.error(`${tableName} remove`, err.message);
      next(err);
    }
  },
};
