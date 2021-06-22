const service = require('../services/programmingLanguages');

module.exports = {
  getMultiple: async function(req, res, next) {
    try {
      res.json(await service.getMultiple());
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  },
  getSingle: async function(req, res, next) {
    try {
      res.json(await service.getSingle(req.params.id));
    } catch (err) {
      console.error(`Error while getting programming language `, err.message);
      next(err);
    }
  },
  create: async function(req, res, next) {
    try {
      res.json(await service.create(req.body));
    } catch (err) {
      console.error(`Error while creating programming language`, err.message);
      next(err);
    }
  },
  update:  async function(req, res, next) {
    try {
      res.json(await service.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating programming language`, err.message);
      next(err);
    }
  },
  remove: async function(req, res, next) {
    try {
      res.json(await service.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting programming language`, err.message);
      next(err);
    }
  }
}